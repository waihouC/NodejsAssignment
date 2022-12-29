const express = require('express');
const router = express.Router();
const { sequelize, Sequelize } = require('../sequelize/models');
const countryList = require('country-list');
const countryCode = countryList.getCodeList();

router.get('/', async(req, res) => {
    res.render('main', {
        'countryCode': countryCode
    });
});

router.post('/', async(req, res) => {
    const country = (req.body.code).toUpperCase();
    const records = await sequelize.query(
        `select au.name as author, book_name, borrower from (
            select book_id, book_name, borrower from (
                select _bk.id as book_id, _bk.name as book_name, _pp.name as borrower, c1, c2,
                    rank() over(
                    partition by _bk.name
                    order by c1 desc
                ) from
                book_rents _br
                inner join (
                    select pp1.id, pp1.name, count(bk1.id) as c1 from 
                        book_rents br1
                        inner join people pp1 on pp1.id = br1.person_id
                        inner join countries ct1 on ct1.id = pp1.country_id
                        inner join books bk1 on bk1.id = br1.book_id
                        where ct1.code = :country
                        group by pp1.id
                        order by count(bk1.id) desc
                ) _pp on _pp.id = _br.person_id
                inner join (
                    select bk2.id, bk2.name, count(pp2.id) as c2 from 
                        book_rents br2
                        inner join people pp2 on pp2.id = br2.person_id
                        inner join countries ct2 on ct2.id = pp2.country_id
                        inner join books bk2 on bk2.id = br2.book_id
                        where ct2.code = :country
                        group by bk2.id
                    order by c2 desc
                    limit 3
                ) _bk on _bk.id = _br.book_id ) a
                where rank <= 3
                order by c2 desc, c1 desc ) b
        inner join author_books ab on ab.book_id = b.book_id
        inner join authors au on au.id = ab.author_id`,
        {
            replacements: { country: country },
            type: Sequelize.SELECT,
            raw: true,
            nest: true
        }
    ).then(function(records) {
        let storage = [];

        const result =  records.reduce(function(acc, current) {
            const found = storage.find(x => x.name === current.book_name);
            if (!found) {
                storage.push({ author: current.author, name: current.book_name, borrower: [ current.borrower ]});
            } else {
                found.borrower.push(current.borrower);
            }

            return storage;
        }, {});

        res.render('main', {
            'countryCode': countryCode,
            'result': Object.keys(result).length != 0 ? JSON.stringify(result, null, " ") : JSON.stringify({ message: "no result" })
        });
    });
});

module.exports = router;
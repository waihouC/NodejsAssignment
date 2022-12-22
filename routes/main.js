const express = require('express');
const router = express.Router();
const countryList = require('country-list');
const countryInfo = countryList.getCodeList();

router.get('/', async(req, res) => {
    res.render('main', {
        'countryInfo': countryInfo
    });
});

router.post('/', async(req, res) => {
    console.log("inside test");
    console.log(req.body.country);
    //res.render('main');
});

module.exports = router;
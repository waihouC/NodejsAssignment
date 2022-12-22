const express = require('express');
const hbs = require("hbs");
const wax = require("wax-on");
const { sequelize } = require('./sequelize/models')

let app = express();
app.set("view engine", "hbs");
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

async function connectToDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to database:', error);
      }
}

connectToDB(); 

const mainRoutes = require('./routes/main');

async function main() {
    app.use('/', mainRoutes);
}

main();

app.listen(3000, () => {
    console.log("Server started.");
});
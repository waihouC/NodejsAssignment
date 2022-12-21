const express = require('express');
const { sequelize } = require('./sequelize/models')

let app = express();

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
const express = require('express');
const db = require('./sequelize/models/index')

let app = express();

async function connectToPostgres() {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connectToPostgres(); 
// app.get('/', function(req,res){
//     res.send("<h1>Hello from Express</h1>");
// })

app.listen(3000, () => {
    console.log("Server started.");
});
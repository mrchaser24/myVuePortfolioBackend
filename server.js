const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

//DECLARING APP
const app = express();

//PORT TO LISTEN
const port = 8000;

//DATA PARSER
app.use(bodyParser.urlencoded({ extended: true }));

//DATABASE CONNECTION
MongoClient.connect(db.url, (err, database) => {
    if(err)return console.log(err)

    //GET DB NAME NOT COLLECTION NAME
    const dbase = database.db("vuePortDB");
    require('./app/routes')(app, dbase);
});

//MAIN
require('./app/routes')(app,{});
app.listen(port, ()=>{
    console.log('We are live on '+port);
});
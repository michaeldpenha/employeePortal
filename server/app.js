const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var path = require('path');
const database = require('./config/database');

const app = express();
app.use(express.static(path.join(__dirname, '../client')));
const mongoDB = database.url;

//Connect to Mangoose
mongoose.connect(mongoDB,{
    useMongoClient : true
});
const db = mongoose.connection;

// When successfully connected
db.on('connected', function() {
     console.log('Mongo DB connection open for DB');
});

require('./routes')(app);

app.listen(3000);
console.log('Running on port 3000 ....')
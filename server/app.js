const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var path = require('path');
const EmployeesData = require("./models/employeesData");

const app = express();
app.use(express.static(path.join(__dirname, '../client')));
const mongoDB = 'mongodb://localhost/employees';

//Connect to Mangoose
mongoose.connect(mongoDB,{
    useMongoClient : true
});
const db = mongoose.connection;

// When successfully connected
db.on('connected', function() {
     console.log('Mongo DB connection open for DB');
});

app.get('/',(req,res) =>{
    res.send('Hello World')
});
app.get('/api/employees',(req,res) => {
    EmployeesData.getEmployeesData((err,employees)=>{
        if(err){
            console.error(err);
        }
        res.json(employees);
    })
});

app.listen(3000);
console.log('Running on port 3000 ....')
const EmployeesData = require("./models/employeesData");

module.exports = function(app) {

    app.get('/',(req,res) =>{
        res.send('Hello World')
    });
    //Get Employees Data
    app.get('/api/employees',(req,res) => {
        EmployeesData.getEmployeesData((err,employees)=>{
            if(err){
                console.error(err);
            }
            res.json(employees);
        })
    });
};
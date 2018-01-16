const mongoose = require("mongoose");

//Employees Schema
// Validations can also can be added in schema

let employeesSchema = mongoose.Schema({
    "first_name" : {
         type : String
    }
});

let EmployeesData = module.exports = mongoose.model('employees',employeesSchema);

// Get Employee Data

module.exports.getEmployeesData = (callback,limit) =>{
    EmployeesData.find(callback).limit(limit);
}

// Delete Employee Data

module.exports.deleteEmployeeData = (firstName,callback) =>{
    let query = {"first_name": firstName};
    EmployeesData.remove(query,callback);
}
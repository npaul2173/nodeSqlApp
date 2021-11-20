const Employee = require("../models/employee.model");

// Business Logic
exports.findAll = function (req, res) {
  Employee.findAll(function (err, employee) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", employee);
    res.send(employee);
  });
};

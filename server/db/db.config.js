"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localHost",
  user: "root",
  password: "root",
  database: "sql_work",
});

db.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

module.exports = db;

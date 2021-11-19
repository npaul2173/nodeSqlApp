const express = require("express");
const cors = require("cors");
const db = require("./db/db.config");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

db.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

//Router to GET specific learner detail from the MySQL database
app.get("/learners", (req, res) => {
  db.query("SELECT * FROM sql_work.new_table", (err, rows, fields) => {
    console.log(err, rows, fields);
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.get("/", (req, res) => {
  // const sqlInsert = ""
  res.json({ message: "Welcome to bezkoder application." });
  // res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

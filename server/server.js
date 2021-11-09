const express = require("express");
const cors = require("cors");
const mySql = require("mysql");
const app = express();
const PORT = 3000;

const db = mySql.createPool({
  host: "localHost",
  user: "root",
  password: "root",
  databse: "sql_work",
});

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  // const sqlInsert = ""
  res.json({ message: "Welcome to bezkoder application." });
  // res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

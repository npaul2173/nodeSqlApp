const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const employeeRoutes = require("./routes/index");
app.use("/api/v1/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

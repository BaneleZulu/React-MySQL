const express = require("express");
const conn = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const database = conn.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_counselling_system",
});

app.get("/", (err, res) => {
  return res.json("Backend service");
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});

app.post("/root", (req, res) => {
  const dml =
    "INSERT INTO address(country, province, city, street, zip_code) VALUES(?)";
  const values = [
    req.body.country,
    req.body.province,
    req.body.city,
    req.body.street,
    req.body.zip_code,
  ];

  database.query(dml, [values], (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

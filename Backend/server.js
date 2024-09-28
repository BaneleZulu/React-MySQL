const express = require("express");
const conn = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (err, res) => {
  return res.json("Backend service");
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});

const database = conn.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_counselling_system",
});

app.get("/root", (err, res) => {
  const query = "SELECT * FROM Student";
  database.query(query, (err, rows) => {
    if (err) {
      return res.json({ status: 500, message: "Error fetching data" });
    }
    return res.json(rows);
    // console.log(rows);
  });
});

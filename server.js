const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("express is here");
});

app.post("/create", (req, res) => {
  res.send("!");
  console.log(req.body);
});

app.post("/hi", (req, res) => {
  res.send("!@!@");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

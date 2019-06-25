const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Errybody!!!!!");
});

app.post("/", (req, res) => {
  res.send(`Hello, i got a ${req.method} request`);
});

app.put("/", (req, res) => {
  res.send(`Hello, i got a ${req.method} request`);
});

app.delete("/", (req, res) => {
  res.send(`Hello, i got a ${req.method} request`);
});

module.exports = app;

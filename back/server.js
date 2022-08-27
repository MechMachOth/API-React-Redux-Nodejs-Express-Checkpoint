"use strict";

// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// define port to run express app
const port = process.env.PORT || 3001;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let arr = [{ id: 1, name: "Othmane" }];
// Add endpoint
app.get("/", (req, res) => {
  res.send(arr);
});

app.post("/po", (req, res) => {
  arr.push(req.body);
  res.send(arr);
});

app.put("/pu", (req, res) => {
  arr.forEach((el) => {
    if (el.id === req.body.id) {
      el.name = req.body.name;
    }
  });
  res.send(arr);
});

app.delete("/de", (req, res) => {
  arr = arr.filter((el) => el.id !=req.query.id);
  res.send(arr)
});

// Listen to server
app.listen(port, () => {
    console.log(`Wa si MechMach ra Server running at http://localhost:${port}`);
});

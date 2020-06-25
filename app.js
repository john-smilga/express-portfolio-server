const express = require("express");
const app = express();
const products = require("./projects/react/vintage-tech/products");
const people = require("./projects/javascript/tutorial/people");
const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/projects/react-tech-store-v2/products", function (req, res) {
  res.json(products);
});
app.get("/projects/tutorial/people", function (req, res) {
  res.json(people);
});

app.listen(process.env.PORT || 3000);

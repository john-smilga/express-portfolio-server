const path = require("path");
// express favicon cors
const express = require("express");
const favicon = require("serve-favicon");
const cors = require("cors");
// products people
const products = require("./projects/react/vintage-tech/products");
const people = require("./projects/javascript/tutorial/people");

const app = express();

app.use(favicon(path.join(__dirname, "favicon.ico")));

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/projects/react-tech-store-v2/products", function (req, res) {
  res.json(products);
});
app.get("/javascript/tutorial/people", function (req, res) {
  res.json(people);
});

app.listen(process.env.PORT || 3000);

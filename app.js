const express = require("express");
const app = express();
const products = require("./products");
const cors = require("cors");

app.use(cors());

app.get("/", function(req, res) {
  res.send("Hello World!");
});
app.get("/projects/react-tech-store-v2/products", function(req, res) {
  res.json(products);
});

app.listen(process.env.PORT || 3000);

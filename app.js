const express = require("express");
const app = express();
const products = require("./products");

app.get("/projects/react-tech-store-v2", function(req, res) {
  res.json(products);
});

app.listen(process.env.PORT || 3000);

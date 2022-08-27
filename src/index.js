const express = require("express");
const app = express();
app.use(express.json());

const userController = require("./controllers/user_controller");
const searchItemController = require("./controllers/searchItem_controller");
const productsController = require("./controllers/products_controller");

app.use("/users",userController);
app.use("/searches",searchItemController);
app.use("/products",productsController);

module.exports = app;
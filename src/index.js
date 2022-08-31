const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors());
app.use(express.json());

const userController = require("./controllers/user_controller");
const searchItemController = require("./controllers/searchItem_controller");
const productController = require("./controllers/product_controller");
const pulseController = require("./controllers/pulse_controller");
const oilController = require("./controllers/oil_controller");
const riceController = require("./controllers/rice_controller");
const cartController = require("./controllers/cart_controller");
const {login,register} = require("./controllers/auth_controller");

app.use("/users",userController);
app.use("/searches",searchItemController);
app.use("/products",productController);
app.use("/pulses",pulseController);
app.use("/oils", oilController);
app.use("/rice", riceController);
app.use("/carts",cartController);

app.post("/register", register);
app.post("/login", login);

module.exports = app;
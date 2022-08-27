const express = require("express");
const Product = require("../models/products_model");
const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const products = await Product.find().lean().exec();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router;
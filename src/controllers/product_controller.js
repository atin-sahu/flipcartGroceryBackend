const express = require("express");
const Product = require("../models/product_model");
const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 5;
        const skip = (page - 1) * pagesize;
        let sortvalue = Number(req.query.sort);
        const products = await Product.find().sort({price:sortvalue}).skip(skip).limit(pagesize).lean().exec();
        const totalPages = Math.ceil((await Product.find().countDocuments()) / pagesize);
        return res.status(200).send({products, totalPages});

        // let sortvalue = Number(req.query.sort);
        // const products = await Product.find().sort({price:sortvalue}).lean().exec();
        // return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const products = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router;
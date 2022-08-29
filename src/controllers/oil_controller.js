const express = require("express");
const Oil = require("../models/oil_model");
const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const oils = await Oil.find().lean().exec();
        return res.status(200).send(oils);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const oils = await Oil.findById(req.params.id).lean().exec();
        return res.status(200).send(oils);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router;
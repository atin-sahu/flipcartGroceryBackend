const express = require("express");
const Rice = require("../models/rice_model");
const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const rices = await Rice.find().lean().exec();
        return res.status(200).send(rices);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const rices = await Rice.findById(req.params.id).lean().exec();
        return res.status(200).send(rices);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router;
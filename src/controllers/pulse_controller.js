const express = require("express");
const Pulse = require("../models/pulse_model");
const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const pulses = await Pulse.find().lean().exec();
        return res.status(200).send(pulses);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const pulses = await Pulse.findById(req.params.id).lean().exec();
        return res.status(200).send(pulses);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router;
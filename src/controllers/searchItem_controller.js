const express = require("express");
const SearchItem = require("../models/searchItem_model");
const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const searchItems = await SearchItem.find().lean().exec();
        return res.status(200).send(searchItems);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

module.exports = router;
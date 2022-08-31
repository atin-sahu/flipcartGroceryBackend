const express = require("express");
const Cart = require("../models/cart_model");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

router.get("/", async(req,res)=>{
    
    try {
        const carts = await Cart.find().lean().exec();
        return res.status(200).send(carts);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


// add authenticate in post request agter rout and before async function
router.post("/", async(req,res)=>{
    // req.body.user = req.userID;
    try {
        const cart = await Cart.create(req.body);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router;
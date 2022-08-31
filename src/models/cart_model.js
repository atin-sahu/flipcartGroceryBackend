const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
    {
        id:{type:Number, required:true},
        user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : false},
        imgUrl:{type:Array, required:true},
        title:{type:String, required:true},
        brand:{type:String, required:true},
        price:{type:Number, required:true},
        old_price:{type:Number, required:true},
        disscount:{type:Number, required:true},
        qty:{type:Array, required:true},
        unit:{type:String, required:true},
        available_offers:{type:Array, required:true},
        EXD:{type:String, required:true},
        MFD:{type:String, required:true},
        services:{type:Array, required:true},
        seller:{type:String, required:true},
        description:{type:String, required:true},
    },{
        versionKey:false,
        timestamps:true
    }
)

const Cart = new mongoose.model("cart", cartSchema);
module.exports = Cart;
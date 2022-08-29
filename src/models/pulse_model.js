const mongoose = require("mongoose");
const pulseSchema = new mongoose.Schema(
    {
        id:{type:Number, required:true},
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

const Pulse = new mongoose.model("pulse", pulseSchema);
module.exports = Pulse;
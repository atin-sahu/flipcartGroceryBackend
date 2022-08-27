const mongoose = require("mongoose");
const searchItemSchema = new mongoose.Schema(
    {
        imgUrl:{type:String, required:true},
        title:{type:String, required:true},
        sub_title:{type:String, required:true},
        key:{type:String, required:true}
    },{
        versionKey:false,
        timestamps:true
    }
)

const SearchItem = new mongoose.model("searche", searchItemSchema)
module.exports = SearchItem;

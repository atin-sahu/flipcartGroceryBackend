const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb+srv://atin-sahu:atinsahu@cluster0.5qorbgq.mongodb.net/flipcart?retryWrites=true&w=majority")
};
module.exports = connect;
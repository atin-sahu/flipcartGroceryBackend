const app = require("./index");
const connect = require("./configs/db")

app.listen(5000, async() =>{
    try {
        await connect();
    } catch (error) {
        console.log(err);
    }
    console.log("listning on port 5000");
})
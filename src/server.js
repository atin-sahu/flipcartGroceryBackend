const app = require("./index");
const connect = require("./configs/db")

require("dotenv").config();

app.listen(process.env.PORT || 3001, async() =>{
    try {
        await connect();
        console.log(`listning on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})
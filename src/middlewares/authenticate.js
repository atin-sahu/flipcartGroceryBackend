const jwt = require("jsonwebtoken")

const varifyToken = (token)=>{
    return new Promise((resolve,reject) =>{
        jwt.verify(token, process.env.SECRET_KEY, (err,decode) => {
            if(err){
                reject(err);
            }
            return resolve(decode);
        });
    })
}

const authenticate = async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(400).send({message:"Authorization token not found"})
    }
    if(!req.headers.authorization.startWith("Bearer ")){
        return res.status(400).send({message:"Authorization token is incorrect"})
    }
    const token  = req.headers.authorization.trim().split(" ")[1];
    let userDetails;
    try {
        userDetails = await varifyToken(token);
    } catch (error) {
        // return res.status(400).send({message :"Authorization token does not match with stored token" })
        return res.status(400).send({message : error.message})
    }
    req.userID = decoded.user._id;
    return next();
}

module.exports = authenticate;
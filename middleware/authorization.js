const jwt = require("jsonwebtoken");
require('dotenv').config(); 

module.exports = async(req, res, next) => {
    const jwtToken = req.header("token");
    if (!jwtToken) {
        return res.status(403).json("You are not Authorized");
    }

    try {
    const verify = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = verify.user;
    next();
    } catch (err) {
        res.status(401).json("Invalid Token");
    }
 }

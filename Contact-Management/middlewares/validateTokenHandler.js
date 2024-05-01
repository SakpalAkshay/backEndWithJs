const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next)=>{ //its a middleware so we need these many parameters
    let token;
    //The authorization header name is case-sensitive according to HTTP standards.
    let authHeader = req.headers.authorization || req.headers.Authorization; //attempts to access the "Authorization" header with a capital "A"
    //checks if the authHeader string starts with the "Bearer" scheme. In the OAuth 2.0 authentication standard, tokens are often sent in the format "Bearer <token>"
    if(authHeader && authHeader.startsWith("Bearer")){
        //authHeader.split(" ")[1]: This accesses the second element of the array created by split(" "), which corresponds to the token portion after "Bearer"
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not Authorized");
            }
            req.user = decoded.user;
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("User is not Authorized or token is missing");
        }
    }

});

module.exports = validateToken;
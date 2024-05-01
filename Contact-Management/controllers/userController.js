//But async function need  TRY CATCH functionality to catch errors and resolve them
//For this we EXPRESS ASYNC handler
//The express-async-handler package is commonly used in Express.js applications to handle asynchronous functions and middleware errors in a more streamlined manner.
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const brcypt = require("bcrypt");
const User = require("../models/userModel");



//@desc Get Current user
//@route GET/api/user/current
//@access public
const currentUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Fetching current user"});
});

//@desc POST Register User
//@route POST/api/user/register
//@access public
const registerUser = asyncHandler(async (req,res) =>{

    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email}); //need to find based upon a field cause we are passing JSON
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
 
    //now after all checks lets Hash the password
    //await: Since bcrypt.hash returns a promise
    //bcrypt.hash(password, 10): This code uses the hash method provided by the bcrypt library to hash the plaintext password (password) with a specified cost factor (10). The cost factor (also known as the number of hashing rounds) determines the computational effort required to hash the password
    const hashedPassword = await brcypt.hash(password,10);
    //creating user
    const user = await User.create({username,email,password:hashedPassword}); //username and email fields are same but we modified the password
    console.log("Created User",user);
    if (user){
        res.status(201).json({_id : user.id, email: user.email});
    } else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    

});


//@desc POST Login User
//@route POST/api/user/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }
    //checking if Password gets matched or user exist, would be using SHORT CIRCUIT
    const user = await User.findOne({email});
    if(user && await brcypt.compare(password,user.password)){//compare a plaintext password provided by a user with a hashed password stored in your database (typically retrieved from the user object)
        //if user gets verified we provide him an access token 
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id
            }, 
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m" });
        res.status(200).json({accessToken})
    } else{
        //Validation has failed => Trying for Unauthorized Access
        res.status(401);
        throw new Error("Failed to get Authorized, email or password invalid.");
    }
    res.status(200).json({message:"User Logged in Successfully"});
});

module.exports = {currentUser,registerUser,loginUser};
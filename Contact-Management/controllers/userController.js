//But async function need  TRY CATCH functionality to catch errors and resolve them
//For this we EXPRESS ASYNC handler
//The express-async-handler package is commonly used in Express.js applications to handle asynchronous functions and middleware errors in a more streamlined manner.
const asyncHandler = require("express-async-handler");

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
    res.status(201).json({message:"Registering User"});
})


//@desc POST Login User
//@route POST/api/user/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Logged in Successfully"});
});

module.exports = {currentUser,registerUser,loginUser};
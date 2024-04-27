const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username:{
        type: String,
        required:[true, "Please provide a Username"]
    },
    email:{
        type: String,
        required:[true, "Please Provide a email address"],
        unique:[true, "Email address already taken"],
    },
    password:{
        type:String,
        required:[true, "Please add the user password"],
    },
    
}, {timestamps:true});


module.exports = mongoose.model("User",userSchema);
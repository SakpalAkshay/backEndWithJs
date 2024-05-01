const mongoose = require("mongoose");

//This code defines a Mongoose schema for a contact. Inside the schema definition, you specify the fields (properties) of the contact document along with their types and validation rules.
const contactSchema =  mongoose.Schema({
    //we added user id so that specifuic user can update the contact
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",

    },

    //type property specifying the data type (String in this case) and a required property indicating that the field is required for document validation
    name: {type : String, required: [true,"Please Add Contact Name"],
    //required option is an array with two elements: true specifies that the field is required, and the second element is an error message to be displayed if the field is not provided
},
email: {type : String, required: [true,"Please Add Email Address"],
},
phone: {type : String, required: [true,"Please Add Phone Number"],
},
});

//Mongoose model named "Contact" using the contactSchema. A Mongoose model is a wrapper for a MongoDB collection and provides an interface for interacting with documents in that collection.
module.exports = mongoose.model("Contact", contactSchema)

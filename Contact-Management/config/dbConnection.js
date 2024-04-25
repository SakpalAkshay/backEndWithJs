//imports the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose simplifies interactions with MongoDB by providing a schema-based solution for modeling data.
const mongoose = require("mongoose");

//Asynchronous functions in JavaScript allow you to work with promises and use async/await syntax for handling asynchronous operations.
const connectDb = async() =>{
//The try...catch block is used to handle potential errors that may occur during the database connection process.
    try{

        //The await keyword is used because mongoose.connect returns a promise, and async/await syntax allows us to wait for the promise to resolve before proceeding.
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ", connect.connection.host, connect.connection.name);

    }
    catch(err){
    console.log(err);
    //The error is logged to the console, and process.exit(1) is called to exit the Node.js process with a non-zero exit code (indicating an error).
    process.exit(1);    
    }
    
}

module.exports = connectDb;
    


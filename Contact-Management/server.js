// Import the Express framework module
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");


//loads the variables from the .env file into the process.env object. The .env file typically contains key-value pairs of environment variables
const dotenv = require("dotenv").config();

// Create an Express application instance
const app = express();

//connecting to DB
connectDb();



//sets the port variable to either the value of the PORT environment variable (if it is set) or defaults to 5000 if the PORT environment variable is not defined.
const port = process.env.PORT || 5000;

// Parse incoming JSON requests and make the parsed data available in req.body
app.use(express.json());


//middleware function responsible for handling errors that occur during the processing of requests. It typically takes four parameters: err, req, res, and next
app.use(errorHandler);

//sets up a middleware in the Express application using the app.use() method. 
//Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
app.use('/api/contacts/', require('./routes/contactRoutes'));


// Start the server and listen for incoming connections on the specified port
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`); 
});


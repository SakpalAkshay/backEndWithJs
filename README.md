# backEndWithJs

Here's how the myapp.js code works step by step:

Setting Up:
We start by importing a package called 'express' which helps us create a web server.
We create an instance of the server and name it 'app'.
We tell the server to listen for incoming requests on port 3000.
User Data:
We create a piece of information about a user. In this case, it's just a simple object with a name.
Handling Requests:
When someone goes to the "/user" URL in their web browser, the server will respond with the user data we created earlier.
Checking if a User Exists:
When someone goes to a URL like "/user/Akshay", the server will check if a user with the name "Akshay" exists.
If the user exists, the server responds with a message saying "Yes User Exist".
If the user doesn't exist, the server responds with an error message and a "404" status, which means "Not Found".
Function to Check User:
There's a function called 'getUser' that's used to check if a user exists.
This function takes a name as input and goes through the user data we created earlier.
If it finds a user with the given name, it returns "true", meaning the user exists.
If it doesn't find a user with the given name, it returns "false", meaning the user doesn't exist

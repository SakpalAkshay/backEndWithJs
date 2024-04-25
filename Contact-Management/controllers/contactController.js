//A "Controller" that mutates the model in response to user actions.  
//Helps to communicate between client and database
//Controller is just a function!. It has two arguments. First argument is for request and it comes from client side and second argument is response and it comes from server. So controller receives two things: request and response. Working: controller takes request and modifies request and saves something into database and then if saved successfully it will return a response to the client and if something went wrong then it will send the specific error to client.


//When ever we use Mongoose for MongoDB call it returns us a promise and to handle that 
// We need async functions, So We have added Asyn to all our arroe functions

//But async function need  TRY CATCH functionality to catch errors and resolve them
//For this we EXPRESS ASYNC handler


//@desc Get Contact
//@route GET/api/contact
//@access public
//req: Represents the request object containing information about the HTTP request.
//res: Represents the response object used to send back an HTTP response.
const getContacts = async (req,res)=>{
    console.log("Sending Routes of Contacts from Route Folder");
    res.status(200).json({message: "Get All Contacts"});
};

//@desc POST Contact
//@route POST/api/contact
//@access public
const createContact = async (req,res)=>{
    console.log("Creating Contact");

    //handling error for Body
    const {name, email, phone} = req.body;

    if(!name || !email || !phone){
        console.log(name,email,phone);
        res.status(400)
        throw new Error("All body fields are Mandatory");
    }

    console.log("Received Body from Request", req.body)


    res.status(200).json({message: "Create Contact"});
};

//@desc PUT Contact
//@route PUT/api/contact/:id
//@access public
const updateContact = async (req,res)=>{
    console.log("Updating Contact");
    //${req.params.id}: This syntax is used to access the value of the id parameter in the URL
    res.status(200).json({message: `Updating Contact For ID ${req.params.id}`});
};


//@desc DELETE Contact
//@route DELETE/api/contact/:id
//@access public
const deleteContact = async (req,res)=>{
    console.log("Deleting Contact");
    res.status(200).json({message: `deleteing contact for ID ${req.params.id}`});
};
//@desc Get Contact
//@route GET/api/contact:id
//@access public
const getContact = async  (req,res)=>{
    console.log("Sending Contact based on ID")
    res.status(200).json(`Sending Contact for ID ${id}`);
};
module.exports = {getContacts, createContact, updateContact, deleteContact, getContact};
const express = require('express');

//Routers are used to group route handlers for a specific part of an application.
const router = express.Router();
const {getContacts, createContact, updateContact, deleteContact, getContact } = require("../controllers/contactController");
const validateToken = require('../middlewares/validateTokenHandler');
//Protecting the Contact routes with Validation of User so that only user can Update them
router.use(validateToken);

//a route for the root path ("/") using the get method of the router instance.
router.route("/").get(getContacts).post(createContact); //Mutiple HTTP Methods through a single Route

//Define a route with a dynamic parameter ":id" using the router instance
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);//Chain different HTTP methods with corresponding route handlers



//// Export the router instance for use in other modules
module.exports = router;
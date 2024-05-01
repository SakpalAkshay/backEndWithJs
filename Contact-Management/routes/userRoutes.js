const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middlewares/validateTokenHandler');
//Routers are used to group route handlers for a specific part of an application.
const router = express.Router();


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/current').get(validateToken,currentUser);

module.exports = router;
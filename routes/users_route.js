//required express
const express = require('express');
//creating router
const router = express.Router();

//Accessing Users Controller via users routes
const usersController = require('../controllers/user_controller');
//getting the action 'i.e profile' exported by users_controller
router.get('/profile', usersController.profile );

// Getting the Actions exported by Users controller for Sign In and Sign Up.
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

// Creating Action to Create sign up form
router.post('/create', usersController.create);
// Creating Action to Create Sign IN Session
router.post('/create-session', usersController.createSession);


//exporting router
module.exports = router;
//required express
const express = require('express');
//creating router
const router = express.Router();

//Accessing Users Controller via users routes
const usersController = require('../controllers/user_controller');
//getting the action 'i.e profile' exported by users_controller
router.get('/profile', usersController.profile );



//exporting router
module.exports = router;
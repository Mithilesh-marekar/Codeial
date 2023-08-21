//This express gets loaded automaticall with the main Index.js file 
// as both require express. so as the main index.js gets loaded it saves
//  the instance of express that can be used anywhere.

const express = require('express'); 
//accessing Controller
const homeController = require('../controllers/home_controller');
const router = express.Router();
console.log("Router Activated");

//accessing controller action
router.get('/',homeController.home );



//List of other routes controlled by this route. 'i.e index.js'
router.use('/users', require ("./users_route") );//users route

//post route
router.use('/post', require ("./post_route"));


//to make it available to app index.js
module.exports = router;


//This express gets loaded automaticall with the main Index.js file 
// as both require express. so as the main index.js gets loaded it saves
//  the instance of express that can be used anywhere.

const express = require('express'); 
const homeController = require('../controllers/home_controller');
const router = express.Router();
console.log("Router Activated");

router.get('/',homeController.home );
router.use('/users', require('./users_routes'));

module.exports = router;


//required express
const express = require('express');
//creating router
const router = express.Router();

//Accessing Users Controller via users routes
const postController = require('../controllers/post_controller');
//getting the action 'i.e post' exported by users_controller
router.get('/like', postController.post );
// router.get('/comment', postController.post );



//exporting router
module.exports = router;
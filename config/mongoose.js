//requiring mongoose
const mongoose = require('mongoose');

//connecting mongoose to the local host. 
// having some problem with the localhost so I set it to gloabal 0.0.0.0
mongoose.connect('mongodb://0.0.0.0/codeial_developement');

// connecting mongoose
const db = mongoose.connection;

// error handelling
db.on('error' , console.error.bind("Error connecting to DataBase Mongo db"));
// when conncected to db
db.once('open', function(){
    console.log("Connected to DataBase :: Mongo Db");
});
// exporting the module. To make this file usable.
module.exports = db;
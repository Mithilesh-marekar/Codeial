const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique : true
    },

    password:{
        type : String ,
        required:true
    },
    name:{
        type :String,
        required  : true
    }
},{
    timestamps : true
});

//  Telling Mongoose that this is a model/collection.
const User = mongoose.model('User', userSchema);
//exporting to make this file usable.
module.exports = user;
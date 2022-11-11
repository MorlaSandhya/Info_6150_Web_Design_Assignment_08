const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true
    },
    fullname : {
        type : String,
        required: true
    }
})



const Userdb = mongoose.model('usermanagement', schema);

module.exports = Userdb;
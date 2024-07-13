const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {
        type : String ,
        require : true
    },
    password : {
        type : String ,
        require : true
    },
    date : { 
        type : Date , 
        default : Date.now
    }
});

module.exports = mongoose.model('User',userSchema);
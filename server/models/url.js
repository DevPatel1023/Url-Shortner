const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    originalUrl : {
        type : String ,
        require  : true
    } ,
    shortUrl : {
        type : String , 
        require : true
    },
    date : { 
        type : Date , 
        default : Date.now
    }
});

module.exports = mongoose.model('Url',UrlSchema);
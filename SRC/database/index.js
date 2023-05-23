const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Thiago:123@thiagomf.xlh1dkc.mongodb.net/pruebajhon?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('Failed to authenticate with MongoDB');
        console.log(error);
        return;
    }
    console.log('MongoDB connection established');
})

mongoose.Promise = global.Promise;

module.exports = mongoose
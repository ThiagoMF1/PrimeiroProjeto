const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ThiagoMF:987654321@projeto1.sd7hhkq.mongodb.net/?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('Failed to authenticate with MongoDB');
        console.log(error);
        return;
    }
    console.log('MongoDB connection established');
})

mongoose.Promise = global.Promise;

module.exports = mongoose
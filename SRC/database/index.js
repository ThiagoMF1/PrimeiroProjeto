const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Thiago:123@thiagomf.xlh1dkc.mongodb.net/pruebajhon?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('No se pudo autenticar con mongodb');
        console.log(error);
        return;
    }
    console.log('Conexión mongodb estable');
})

mongoose.Promise = global.Promise;

module.exports = mongoose
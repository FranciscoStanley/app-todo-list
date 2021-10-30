const mongoose = require("mongoose");

module.exports = async ()=>{
    try{
        mongoose.connect(
            "mongodb+srv://darkAdmin:dark%40%23%241719@cluster0.tkwfo.mongodb.net/test",
            async(err)=>{
                if(err) throw err;
                console.log("conncted to db")
            }
        );
        console.log("Conectado ao banco de dados.")
    }catch(error){
        console.log("Não foi possível conectar ao banco de dados", error)
    }
}
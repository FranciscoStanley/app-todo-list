const mongoose = require("mongoose");

module.exports = async ()=>{
    try{
        mongoose.connect(
            "mongodb+srv://dark:dark%40%231719@cluster0.em7vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task:{
        type: String,
        required:true
    },

    completed:{
        type: Boolean,
        default:false
    },

    description:{
        type: String,
        required:true
    },

    dataConclusao:{
        type: Date
    },

    arquivado:{
        type: Boolean,
    }


});

module.exports = mongoose.model("task", taskSchema);
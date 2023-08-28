const mongoose = require("mongoose")

const taskSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now()
    }
})


const taskModel = mongoose.model("tasks",taskSchema)

module.exports = taskModel
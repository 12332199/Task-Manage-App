const mongoose = require("mongoose")

const userSchema =  new mongoose.Schema({
    user:{
        type: mongoose.ObjectId,
        ref:"users"
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})


const userModel = mongoose.model("users",userSchema)

module.exports = userModel
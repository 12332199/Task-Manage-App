const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { hashPassword, comparePassword } = require("../helpers/userHLP")

const register = async(req,res)=>{
   try {
     const {name,email,password} = req.body

     const hashpassword = await hashPassword(password)

    const user = await userModel({
        name,
        email,
        password:hashpassword
    }).save()
      
    res.status(200).json(user)

   } catch (error) {
     res.status(401).send({
        message:"Erros Found",
        error
     })
   } 
}





const login = async(req,res)=>{
  try {
       const {email,password} = req.body

       if(!email || !password){
          res.status(401).send({
              message:"Email or Password Invalid"
          })
       }

       const user = await userModel.findOne({email})
       if(!user){
          res.status(401).send({
              message:"Email is not register"
          })
       }
       
       const match = await comparePassword(password,user.password);
       if(!match){
          res.status(401).send({
              message:"Enter a valid password"
          })
       }

       const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{
          expiresIn:"7d"
       })

       res.status(201).json({
          success:true,
          message:"Login SuccessFully",
          user:{
              _id:user._id,
              name:user.name,
              email:user.email,
             
          },
          token
       })
  } catch (error) {
      
  }
  }


  const getUser = async(req,res)=>{
   
      try {
         res.send("protected route")
      } catch (error) {
          
      }
 
  }
 module.exports = {register,login,getUser}
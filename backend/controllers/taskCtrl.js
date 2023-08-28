const taskModel = require("../models/taskModel")


const createTask = async(req,res)=>{
    try {
         const {title,description} = req.body
         const task = await taskModel({
            title,
            description,
           
         }).save()
         res.status(201).send({
            success:true,
            message:" Task Created Success",
            task
         })
    } catch (error) {
        res.status(501).send({
            success:false,
            message:" error",
            error
         })
    }
}

const getAllTask = async(req,res)=>{

    try {
        const task = await taskModel.find({})
         res.status(201).json(task)
    } catch (error) {
        res.status(501).send({
            success:false,
            message:" error",
            error
         })
    }
}

const getCompletedTask = async(req,res)=>{

    try {
        const task = await taskModel.find({isCompleted:true})
         res.status(201).json(task)
    } catch (error) {
        res.status(501).send({
            success:false,
            message:" error",
            error
         })
    }
}

const sinTask = async(req,res)=>{
    try {
      const {id} = req.params
     const task = await taskModel.findById(id)
     res.status(200).send(task)

    } catch (error) {
        res.status(501).send({
            success:false,
            message:" error",
            error
         })
    }
}


const updateTask = async(req,res)=>{
    try {
       
        const {id} =  req.params
        const {title,description} = req.body
        const task = await taskModel.findByIdAndUpdate(id,{title,description},{new:true})

        const updateTask = await task.save()
        res.status(200).send({
            success:true,
            message:"Updated success",
            updateTask
        })

    } catch (error) {
        res.status(501).send({
            success:false,
            message:" error",
            error
         })
    }
}

const deleteTask = async(req,res)=>{
    try {
      const {id} = req.params
     const task = await taskModel.findByIdAndDelete(id)
     res.status(200).send({
        success:true,
        message:"deleted success",
        task
     })

    } catch (error) {
        res.status(501).send({
            success:false,
            message:" error",
            error
         })
    }
}
const markComplete = async(req,res)=>{
    try {
      const {id} = req.params
     const task = await taskModel.findByIdAndUpdate(id,{isCompleted:true},{new:true})
     const updateCom = await task.save()
     res.status(200).send({
         success:true,
         message:"Updated Completed",
         updateCom
     })

    } catch (error) {
        res.status(501).send({
            success:false,
            message:" error",
            error
         })
    }
}


module.exports = {createTask,getAllTask,sinTask,updateTask,deleteTask,markComplete}
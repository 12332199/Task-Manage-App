import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'

const CreateTask = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("auth")){
            navigate("/")
        }
    },[navigate])


    const {register,handleSubmit, formState:{errors}} = useForm()
    const OnSubmit = async(values)=>{
     try {
          const res = await axios.post("http://localhost:4000/api/task/create-task",values)
          toast.success(res.data.message)
          navigate('/')
     } catch (error) {
        toast.error(error)
     }
    }
  return (
    <>
    <div className="container">
        <div className="form m-5">
            <h3 className="text-center">CREATE-TASK</h3>
            <form action="" className='w-50 mx-auto' onSubmit={handleSubmit(OnSubmit)}>
                <div className="form-group mt-3">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" {...register("title",{required:true,minLength:3})} />
                    <span className="text-danger">
                        {errors.title?.type === "required" && "Title is required"}
                        {errors.title?.type === "minLength" && "Title must be more than 3 character"}
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Description</label>
                    <input type="text" className="form-control"   {...register("description",{required:true})}/>
                    <span className="text-danger">
                        {errors.description?.type === "required" && "Description is required"}
                       
                    </span>
                    
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-success px-4">CREATE TASK</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default CreateTask
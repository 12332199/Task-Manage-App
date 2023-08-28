import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const Register = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()
  
    const formSubmit = async(data)=>{
       try {
          const res = await axios.post("http://localhost:4000/api/user/register",data)
          toast.success(res.data.message)
         navigate('/login')

       } catch (error) {
        toast.error(error) 
       }
    }
    useEffect(()=>{
        if(localStorage.getItem("auth")){
            navigate("/")
        }
    },[navigate])
  return (
    <>
    

    <div className="register">
       
     <form action="" className='setformCenter' onSubmit={handleSubmit(formSubmit)}>
     <h3 className='text-center '>User Registration </h3>
        <div className="form-group mt-2">
            <label htmlFor="">Full Name</label>
            <input type="text" name='name' className="form-control"  placeholder='Enter your full name' {...register("name",{required:true})}/>
         <span className="text-danger">{errors.name?.type==="required" && "Name is required"}</span>
        </div>
        <div className="form-group mt-2">
            <label htmlFor="">Email</label>
            <input type="email" name='email' className="form-control" placeholder='Enter your email id' {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/>
            <span className="text-danger">
                {errors.email?.type==="required" && "Email is required"}
                {errors.email?.type==="pattern" && "Please enter valid format"}
                </span>
        </div>
        <div className="form-group mt-2">
            <label htmlFor="">Passwrod</label>
            <input type="password" name='password'  className="form-control" placeholder='Enter your password' autoComplete='Name is Required' {...register("password",{required:true,minLength:6,maxLength:20})}/>
            <span className="text-danger">
                {errors.password?.type==="required" && "Password is required"}
                {errors.password?.type==="minLength" && "Password must be 6 character"}
                {errors.password?.type==="maxLength" && "Password is not valid"}
                </span>
        </div>
      
        <div className="d-flex justify-content-center mt-3">
         <p>Are you Already Register? <NavLink to="/login">SignIn</NavLink> </p>
       </div>
       <div className="d-flex justify-content-center ">
       <button className='btn btn-success'>SignUp</button>
       </div>
        </form>   
    </div>
    </>
  )
}

export default Register
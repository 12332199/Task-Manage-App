import React, { useEffect, useState } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useAuth } from '../context/authContext'
import Spinner from '../component/Spinner'


const Login = () => {
const navigate = useNavigate()
const [auth,setAuth] = useAuth()
const [loading,setLoading] = useState(false)

const {register,handleSubmit,formState:{errors}} = useForm()

const OnLogin = async(values) =>{
  try {
    setLoading(true)
    const res = await axios.post("http://localhost:4000/api/user/login",values)
    toast.success('login success')
    setAuth({
     ...auth,
      user:res.data.user,
      token:res.data.token
    })
    localStorage.setItem("auth",JSON.stringify(res.data))
    navigate('/')
    setLoading(false)
   
   

 } catch (error) {
 toast.error("Password/Email are Invalid") 
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
       
       <form action="" className='setformCenter' onSubmit={handleSubmit(OnLogin)} >
        {loading && <Spinner/>}
        <h3 className='text-center'>Sign In</h3>
            <div className="form-group mt-2">
                <label htmlFor="">Email</label>
                    <input type="text" className="form-control" {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} placeholder='Enter email id'/>
                  <span className="text-danger">
                    {errors.email?.type==="required" && "Email is required"}
                    {errors.email?.type==="pattern" && "Enter valid email"}
                    </span>
                
            </div>
            <div className="form-group mt-2">
                <label htmlFor="">Password</label>
                    <input type="password" className="form-control" {...register("password",{required:true,})} placeholder='Enter Password' autoComplete='on'/>
                    <span className="text-danger">
                    {errors.password?.type==="required" && "Password is required"}
                    </span>
                
            </div>
            <div className="d-flex justify-content-between mt-3">
          
         <p style={{fontSize:"14px"}}>Are you new user? <NavLink to="/register">SignUp</NavLink> </p>
       </div>
       <div className="d-flex justify-content-center ">
       <button className='btn btn-success'>SignIn</button>
       </div>
   </form>
    </div>
    </>
  )
}

export default Login
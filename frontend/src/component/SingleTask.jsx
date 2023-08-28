import axios from 'axios';
import React, { useState,useEffect } from 'react'

import { useParams,NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleTask = () => {

    const [title,setTitle] = useState("") 
    const [description,setDescription] = useState("") 
    const [isCompleted,setisCompleted] = useState("") 
    const {id} = useParams()
    const navigate = useNavigate()
   
   
  
     const getSinTask = async()=>{
   try {
      const {data} = await axios.get(`http://localhost:4000/api/task/single-task/${id}`)
      setTitle(data.title)
      setDescription(data.description)
      setisCompleted(data.isCompleted)
      
     
   } catch (error) {
     toast.error(error)
   }
     }
 
     useEffect(()=>{
         getSinTask()
     },[])
 

     useEffect(()=>{
      if(!localStorage.getItem("auth")){
          navigate("/")
      }
  },[navigate])

  return (
    <div className='container d-flex 100-vh justify-content-center align-items-center'>
       <div className="card p-3 w-50 mt-5">
       <p><strong>Task Title:</strong>{title}</p>
          <p><strong>Task Description:</strong>{description}</p>
          <p><strong>Task Status:</strong>{isCompleted}</p>
          <NavLink className='btn btn-success ' to='/'>Go to HomePage</NavLink>
       </div>
    </div>
  )
}

export default SingleTask
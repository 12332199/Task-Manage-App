import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPen ,FaTrashAlt, FaRegEye } from "react-icons/fa";
import {NavLink, useParams} from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from './Spinner';



const Tasks = ({tasks}) => {
  const [loading,setLoading] = useState(false)


  const handleDelete = (id)=>{
    try {
      setLoading(true)
      const res =  axios.delete(`http://localhost:4000/api/task/delete-task/${id}`)
     
     
     toast.success("Task Deleted SuccessFully")
     setLoading(false)
    } catch (error) {
      toast.error(error)
      setLoading(false)
    }
  }

  const handleComplete = (id)=>{
   try {
    setLoading(true)
    const res =  axios.put(`http://localhost:4000/api/task/completed-task/${id}`)
   
    toast.success("Task Complated Successfully")
    setLoading(false)
   } catch (error) {
    toast.error(error)
    setLoading(false)
   }
   

  
    
    
}
  return (
  <>
  <div className="container  ">
     <h1 className='text-center'>Total Task ({tasks.length})</h1>
     {loading && <Spinner/>}
     <div className="row mt-4">
  {
    tasks.map(({title,description,_id,isCompleted})=>{
      return (
        <div className='col col-6 col-sm-6 col-lg-3 '  key={_id}>
        <div className={!isCompleted? "card m-1 p-2" :"card m-1 p-2 bg-success text-white"}  >

        <div className="card-body " >
            <div className="title">
               <h4 style={{fontWeight:"600"}}>{title}</h4>
            </div>
            <div className="desc">
            <p>{description.substring(0,22)}...</p>
            </div>
        </div>
        <div className='' >
          {
            isCompleted?
           <div className='d-flex justify-content-between'>
          <div>
          <NavLink className="text-primary  p-2" to={`/update-task/${_id}`} ><FaPen/></NavLink>
          <NavLink className="text-danger fs-5 p-2" onClick={()=>handleDelete(_id)}><FaTrashAlt/></NavLink>
          </div>
          <div>
            <p className='mt-2'>Completed..</p>
          </div>
           </div>
          :
          <div className="d-flex justify-content-between">
            <button className='btn btn-success markBtn' onClick={()=>handleComplete(_id)}>Mark as Completed</button>
            <NavLink className="text-secondary fs-3  "  to={`/single-task/${_id}`}><FaRegEye/></NavLink>
          </div>
          
    }
           
        </div>
        </div>
        </div>
      )
    })
   }
   </div>
   </div>
   
  </>
    
       
     
    
   
  )
}

export default Tasks
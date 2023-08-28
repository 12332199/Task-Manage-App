import React, { useEffect, useState } from 'react'
import Tasks from '../component/Tasks'
import axios from 'axios'
import {toast} from "react-toastify"
import { useAuth } from '../context/authContext'
import Spinner from '../component/Spinner'

const Homepage = () => {
   const [tasks,setTasks] = useState([])
   const [auth] = useAuth()
   const [loading,setLoading] = useState(false)
  

   const getAllTask = async()=>{
       try {
        setLoading(true)
         const {data} = await axios.get("http://localhost:4000/api/task/get-task")
         setTasks(data)
        
         setLoading(false)
       } catch (error) {
        toast.error(error)
        setLoading(false)
       }
   }

   useEffect(()=>{
    getAllTask()
   },[])
  
  return (
    <div className=''>
      <div className='container mt-5'>
        <h2 className='userName'>Welcome {auth?.user?.name}</h2>
        <hr />
      </div>
     
       <Tasks tasks={tasks}   />
       {loading && <Spinner/>}

          
      
   
    
    </div>
  )
}

export default Homepage
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdateTask = () => {
    const navigate = useNavigate()

    const [title,setTitle] = useState("") 
    const [description,setDescription] = useState("") 
    const [isCompleted,setisCompleted] = useState("") 
    useEffect(()=>{
        if(!localStorage.getItem("auth")){
            navigate("/")
        }
    },[navigate])
const {id} = useParams()
    const getSinTask = async()=>{
  try {
     const {data} = await axios.get(`http://localhost:4000/api/task/single-task/${id}`)
     setTitle(data.title)
     setDescription(data.description)
     setisCompleted(data.isCompleted)
     console.log(data)
  } catch (error) {
    toast.error(error)
  }
    }

    useEffect(()=>{
        getSinTask()
    },[])

 
 const handleUpdate = async(e)=>{
    e.preventDefault()
    try {
          await axios.put(`http://localhost:4000/api/task/update-task/${id}`,{
            title,description,isCompleted
         })
         toast.success("Updated Successfully")
         navigate('/')
    } catch (error) {
        toast.error(error)
    }
 }

 useEffect(()=>{
    if(!localStorage.getItem("auth")){
        navigate("/")
    }
},[navigate])

  return (
    <>
    <div className="container">
        <div className="form m-5">
            <h3 className="text-center">UPDATE-TASK</h3>
            <form action="" className='w-50 mx-auto'  onSubmit={handleUpdate}>
                <div className="form-group mt-3">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" name='title'  value={title}  onChange={(e)=>setTitle(e.target.value)}/>
                   
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Description</label>
                    <input type="text" className="form-control" name='description'  value={description} onChange={(e)=>setDescription(e.target.value)}  />
                    
                    
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Status</label>
                    <input type="text" className="form-control"   name='isCompleted' value={isCompleted} 
                    onChange={(e)=>setisCompleted(e.target.value)} />

                 </div>
                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-success px-4">UPDATE TASK</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )

 
  }

export default UpdateTask
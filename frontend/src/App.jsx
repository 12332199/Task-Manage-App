import React from 'react'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header'
import {Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';

import SingleTask from './component/SingleTask';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <Homepage/>
        </ProtectedRoute>
        }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create-task' element={<CreateTask/>}/>
        <Route path='/update-task/:id' element={<UpdateTask/>}/>
        <Route path='/single-task/:id' element={<SingleTask/>}/>
        
      </Routes>
      <ToastContainer position='top-center' autoClose={400}/>
    </div>
  )
}

export function ProtectedRoute(props){
  if(localStorage.getItem("auth")){
    return props.children;
  }else{
   return <Navigate to='/login'/>
  }
}

export default App
import React from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {
   


  const handleLogout = () =>{
    localStorage.removeItem("auth")
    toast.success("logout success")
   
 
  }
  return (
    <div className='nav'>
    <div className="container">
        <div className="d-flex justify-content-between">
            <div>
                <h4 className='text-white titlename'>Task Manage</h4>
            </div>
            <div className='left'>
           
               

                
                {
                    localStorage.getItem("auth") ?<>
                     <NavLink className="anchor mb-4" to='/'>HOME</NavLink>
                    <NavLink to='/create-task' className="btn resbtn bg-light text-dark">+ADD TASK</NavLink>
                     <NavLink className="anchor " to='/login'> 
                      <button className='btn resbtn bg-danger text-white' onClick={handleLogout}>LOGOUT</button>
                      </NavLink> 
                    </>: <>
                    <NavLink className="anchor" to='/login'>LOGIN</NavLink>
                    <NavLink className="anchor" to='/register'>REGISTER</NavLink>
                    </>
                }
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
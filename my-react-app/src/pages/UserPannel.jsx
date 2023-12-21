import React from 'react'
import { useState } from 'react';

import { IoCloseSharp } from "react-icons/io5";
import {Outlet,NavLink} from 'react-router-dom'

const UserPannel = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='sidebar-container' style={{
   
    }}>
  
 
         <div className={`${show ? "sidebar show-sidebar" : "sidebar"}`}>
             <div className='sidebar-pannel'>
 
             <h2 className='navlinks-header'>User</h2>
             <button onClick={handleClose} style={{
                 position:"absolute",
                 top:"1rem",
                 right:"1rem",
                 border:"none",
                 background:"none",
                 fontSize:"2rem",
                 color:"#eee",
                 
             }}>
             <IoCloseSharp />
             </button>
             <div style={{
                 paddingTop:"1rem",
                 color:"#eee",
                 display:"flex",
                 flexDirection:"column",
                 gap:"1rem",
             
             }}>
                 <NavLink onClick={handleClose} to='' className='navlink'> Home</NavLink>
                 <NavLink onClick={handleClose} to='feselites' className='navlink'> Fecelites</NavLink>
                 <NavLink onClick={handleClose} to='packegs' className='navlink'> Packages</NavLink>
                 {/* <NavLink onClick={handleClose} to='bokings' className='navlink'> Bookings</NavLink> */}
                 <NavLink onClick={handleClose} to='feedback' className='navlink'> FeedBack</NavLink>
             </div>
             </div>
         </div>
         <div className='' style={{
            position:"absolute",
            top:"8rem",
            height:"100%",
            width:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            zIndex:"10"
         }}>
             
             <button onClick={handleShow} className='sidebar-btn'>click to see tours</button>
         </div>
        <Outlet/>
    </div>
  )
}

export default UserPannel
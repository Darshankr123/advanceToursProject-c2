import React from 'react'
import { useState } from 'react';

import { IoCloseSharp } from "react-icons/io5";
import {Outlet,NavLink} from 'react-router-dom'


const AdminPannel = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <div className='sidebar-container' >
        <div className={`${show ? "sidebar show-sidebar" : "sidebar"}`}>
            <div className='sidebar-pannel'>

            <h2 className='navlinks-header'>Admin</h2>
            <button onClick={handleClose} className='close-btn' >
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
                <NavLink onClick={handleClose} to='addtour' className='navlink'>Add Tour</NavLink>
                <NavLink onClick={handleClose} to='addhotel' className='navlink'>Add Cabs</NavLink>
                <NavLink onClick={handleClose} to='addDistrict' className='navlink'>Add District</NavLink> 
                <NavLink onClick={handleClose} to='addGuides' className='navlink'>Add Guides</NavLink> 
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
           zIndex:10
        }}>
            
            <button onClick={handleShow} className='sidebar-btn'>click to verify tours</button>
        </div>
       <Outlet/>
   </div>
  )
}

export default AdminPannel
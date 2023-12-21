
import React from 'react'
import { Button } from 'react-bootstrap'

import {NavLink} from 'react-router-dom'

const UserHome = () => {
  return (
    <div className='' style={{
        position:"absolute",
        top:"8rem",
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
     }}>
         <p style={{
           fontSize:"2rem",
           fontWeight:300,
         }}>Hello User</p>
        
        <NavLink to='/login'>
         <Button style={{
           position:"absolute",
           top:"3rem",
           left:"50%",
           transform:"translate(-50%,-50%)",
           border:'none',
           background:"#333",
           color:"#eee",
           fontWeight:300,
           letterSpacing:"2px",
           padding:"0.5rem 1rem",
           borderRadius:"0.2rem"
           
         }}>logout
         </Button>
  
        </NavLink>
        
     </div>
  )
}

export default UserHome
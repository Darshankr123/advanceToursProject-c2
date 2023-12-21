import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



const UserFeselites = () => {
  return (
    
    <div className='section-center section-center-explore  page-bg ' style={{
        paddingTop:"5rem"
    }} >
    
    <div className='page-center aligning-grid'  style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      gap:"1rem",
      borderBottom:"2px solid",
    }}>
        <div className='navlinks'>
        <NavLink to='' className='navlink'>cabs</NavLink>
        
        <NavLink to='guides' className='navlink'>guides</NavLink>
        
        <NavLink to='activites' className='navlink'>activites</NavLink>
        </div>
        <div className='navlinks'>
        <NavLink to='hotels' className='navlink'>hotels</NavLink>
        
        <NavLink to='rooms' className='navlink'>rooms</NavLink>
        <NavLink to='foods' className='navlink'>foods</NavLink>
        
        
        </div>
      </div>
    
      <Outlet/>
    </div>
  )
}

export default UserFeselites
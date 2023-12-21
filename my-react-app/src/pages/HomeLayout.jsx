import React from 'react'
import NavbarComponent from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const HomeLayout = () => {
  return (
    <div>
        <NavbarComponent/>
        <Outlet/>
       
    </div>
  )
}
export default HomeLayout
import React from 'react'
import Footer from '../components/Footer'

const EmergencyContact = () => {
  return (
    <div className='section-center page-bg'>
      <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"
      }} >
        <h3 style={{
          border:"4px solid #fcd34d",
          padding:"0.5rem 1rem",
          marginBottom:"2rem"
        }}>Contact <span style={{
          color:"#fcd34d",
          
        }}>US</span></h3>
        <div>
          <h4>contact number :  <span style={{
            color:"#eee",
            textDecoration:"underline"
          }}>080-8723-31231</span></h4>
          <h4>mail id :  <span style={{
            color:"#eee",
            textDecoration:"underline"
          }}>exploreTours@gmail.com</span></h4>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default EmergencyContact
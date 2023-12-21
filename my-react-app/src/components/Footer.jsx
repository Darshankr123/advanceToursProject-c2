import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {

    const date = new Date();
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        background:"#292524",
        color:"#eee",
        padding:"1.5rem 0"
    }} >
        
        <div style={{
            display:"flex",
            gap:"2rem",
            fontSize:"1.5rem",
            color:"#fbbf24"
        }}>
            <p style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
            <FaFacebook />
            <a href="#" style={{
                textDecoration:"none",
                textTransform:"capitalize",
                color:"#eee",
                fontSize:'1rem'
            }}>facebook</a>
            </p>
            <p style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
            <FaInstagram />
            <a href="#" style={{
                textDecoration:"none",
                textTransform:"capitalize",
                color:"#eee",
                fontSize:'1rem'
            }}>instagram</a>
            </p>
            <p style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
            <FaTwitter />
            <a href="#" style={{
                textDecoration:"none",
                textTransform:"capitalize",
                color:"#eee",
                fontSize:'1rem'
            }}>twitter</a>
            </p>

        </div>
            <p>&copy;Copyright Explore Tours {date.getFullYear()}</p>
    </div>
  )
}

export default Footer
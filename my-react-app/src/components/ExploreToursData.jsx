import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPlace } from "react-icons/md";
import { GiMatterStates } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import ExploreSubComponent from './ExploreSubComponent';

const ExploreToursData = ({tourId,place,city,state,zip,image}) => {

  const navigate = useNavigate();
    
  return (
  
   
    <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image} style={{
            height:"15rem",
          }} />
          <Card.Body style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
          }} >
            
            <Card.Title>{place}</Card.Title>
            <div style={{
              display:"flex",
              gap:"1rem"
             
            }}>
            <Card.Text ><span><MdPlace /></span> {city} </Card.Text>
            <Card.Text >{state}</Card.Text>
            <Card.Text >{zip}</Card.Text>
            </div>
            <Link to={`/userbookings/${tourId}`} >explore more</Link>
          </Card.Body>
        </Card>
  
  )
  
}

export default ExploreToursData
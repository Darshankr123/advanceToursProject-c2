import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useQuery } from 'react-query';
import { coustomFetch } from '../../utils';
import { useState,useEffect } from 'react';


const UserCabs = ({tourPlace}) => {
    // console.log(tourPlace);
    const [cabs,setCabs] = useState([]);
    
    const getCabs = async()=>{
     const newData = await coustomFetch.get("/GetDriver");
     setCabs(newData.data)
 }
 
 useEffect(()=>{
     getCabs();
 },[])
 
 
 
 const formatedCabs = cabs.filter((place)=>{
     return tourPlace.toLowerCase() === place.district.toLowerCase();
 
 })
 

  return (
    <div style={{
        paddingTop:"2rem"
    }}>
    <h2 className='page-title-dark' style={{
        marginBottom:"2rem"
    }}>near by Cabs</h2>
    <section style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        gap:"2rem"
    }} >
    {   formatedCabs.length === 0 ? <h2>No Hotels near by </h2> :
        formatedCabs.map((items)=>{
        //   console.log(items);   
           
            const {driverId,driverName,district,cost,contactNumber,car,image} = items
            return <div  key={driverId}>
                        
                        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={image} style={{
            height:"15rem",
            objectFit:"cover",
            objectPosition:"center"
        }} />
            <Card.Body style={{
                display:"flex",
                  flexDirection:"column",
                  justifyContent:"center",
                  alignItems:"center"
                     }} >
            
            <Card.Title>{driverName}</Card.Title>
              <section style={{textAlign:"center"}}>
              <div>
                   <Card.Text  >city : {district} </Card.Text>
               </div>
              <div>
                   <Card.Text  >car : {car} </Card.Text>
               </div>
               
               <div>
                   <Card.Text  >price per k/m : {cost} </Card.Text>
               </div>
               <div>
                   <Card.Text >contactNumber : {contactNumber}</Card.Text>
               </div>
               
               </section>
          </Card.Body>
        </Card>
        
    </div>
        })
    }
    </section>
    </div>
  )
}

export default UserCabs
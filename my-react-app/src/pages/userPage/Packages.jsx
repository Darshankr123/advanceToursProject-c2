import React, { useEffect, useState } from 'react'
import { coustomFetch } from '../../utils'
import { Card } from 'react-bootstrap';
import { MdPlace } from 'react-icons/md';

const Packages = () => {

  const[tourDetails,setTourDetails] = useState([]);
  const[roomDetails,setRoomDetrails] = useState([]);
  const[cabDetails,setCabDetails] = useState([]);

  const HotelDetails = async()=>{
    const data = await coustomFetch.get('/GetTours');
    // console.log(data);
    setTourDetails(data.data)
  }

  const RoomDetails=async()=>{
    const data = await coustomFetch.get('/GetRooms');
    // console.log(data);
    setRoomDetrails(data.data)
  }

  const CabDetails=async()=>{
    const data = await coustomFetch.get("/GetDriver");
    // console.log(data);
    setCabDetails(data.data)
  }

  useEffect(()=>{
    HotelDetails();
    RoomDetails();
    CabDetails();
  },[])


  // console.log(tourDetails);
  // console.log(roomDetails);
  // console.log(cabDetails);
  return (
    <div className='section-center page-bg' style={{
      paddingTop:"6rem"
    }}>
       <div className='page-center' style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:"1rem",
      borderBottom:"2px solid",
      padding:"2rem 0",
      
    }}>
      <h2>packages</h2>
  
      <div className='cards'>
         {
           tourDetails.map((tour)=>{
             console.log(tour);
             const {place,category,city,priceOfTour,typeOfPlace,image} = tour
             return <Card style={{ width: '22rem' }}>
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
               <Card.Title><span><MdPlace /></span> {city}</Card.Title>

               <div style={{
                 display:"flex",
                 gap:"1rem"
                
               }}>
               

               <Card.Text style={{textTransform:"capitalize",fontWeight:"600",letterSpacing:"1px"}} >
                <span style={{textDecoration:"underline"}}>category :</span> {category}</Card.Text>

               <Card.Text style={{textTransform:"capitalize",fontWeight:"600",letterSpacing:"1px"}} ><span style={{textDecoration:"underline"}}>price :</span> {priceOfTour}</Card.Text>


               <Card.Text style={{textTransform:"capitalize",fontWeight:"600",letterSpacing:"1px"}} ><span style={{textDecoration:"underline"}}>type of place :</span>{typeOfPlace}</Card.Text>
               </div>
               
             </Card.Body>
           </Card>
           })
         }              
      </div>
    </div>
    </div>
  )
}

export default Packages
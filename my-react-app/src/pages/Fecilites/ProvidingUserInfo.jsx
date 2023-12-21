import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { coustomFetch } from '../../utils'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Payment from './RoomPayment';



export const loader = async({params})=>{
   const id = params.id;
  //  console.log(id);
  const data = await coustomFetch.get(`/GetRoomsById/${id}`);
  // console.log(data);
  return {BookedRoom:data.data}
}

const ProvidingUserInfo = () => {

 

  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [days,setDays] = useState(0);
  const [price,setPrice] = useState(0);

  const {BookedRoom} = useLoaderData();
  // console.log(BookedRoom);

  // users data

  const user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(user);

  const email = user.email
  const roomId = BookedRoom.roomId;
  // console.log(email);

  // console.log(checkIn);
  // console.log(checkOut);
  // console.log(days);
  // console.log( checkIn.slice(8,10));
  // console.log(checkOut.slice(8,10));
  

  let numberOfDays = checkOut.slice(8,10) - checkIn.slice(8,10)
  // console.log(numberOfDays);
  console.log(days);
  useEffect(()=>{
     setDays(numberOfDays)
     setPrice(numberOfDays < 0 ? 0 : numberOfDays *BookedRoom.price)
  },[checkOut])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mh-100 w-auto ' style={{marginTop:"4rem"}}  >
      
      <section style={{
        display:"flex",
        gap:"2rem"
      }}>
 
       <Card border="success" style={{ width: '18rem',background:"darkCyan", color:"#eee" ,letterSpacing:"1px" }}>
          <Card.Header>Date of in</Card.Header>
           <Card.Body>
            <Card.Title>Check in Date</Card.Title>
           
             <input type="date" name='checkIn' value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} style={{marginTop:"1rem",borderRadius:"0.5rem" , border:"none", outline:"none" ,padding:"0.3rem 0.75rem"}} />
         </Card.Body>
        </Card>

        <Card border="success"style={{ width: '18rem',background:"darkCyan", color:"#eee" ,letterSpacing:"1px" }}>
          <Card.Header>Date of Out</Card.Header>
           <Card.Body>
            <Card.Title>Check Out Date</Card.Title>
           
            <input type="date" name='checkOut' value={checkOut} onChange={(e)=>setCheckOut(e.target.value)} style={{marginTop:"1rem",borderRadius:"0.5rem" , border:"none", outline:"none" ,padding:"0.3rem 0.75rem"}}/>
         </Card.Body>
        </Card>
     
      </section>

      <div style={{marginTop:"2rem",letterSpacing:"2px"}}>
        <h4>Number Of Days <span>{numberOfDays < 0 ? 0 : numberOfDays}</span></h4>
        
      </div>

      <div style={{marginTop:"2rem",letterSpacing:"2px"}}>
        <h4>price per {numberOfDays<0? 0 : numberOfDays} {numberOfDays<=1? "day" : "days"} is {price}</h4>
      </div>

      {/* <Button variant="success" style={{letterSpacing:"1px" , marginTop:"1rem"}}>Make Payment</Button> */}

      <Payment userEmail={email} roomId={roomId} checkIn={checkIn} checkOut={checkOut} numberOfDays={days} price={price} roomsData={BookedRoom}/>
     
    </div>
  )
}

export default ProvidingUserInfo
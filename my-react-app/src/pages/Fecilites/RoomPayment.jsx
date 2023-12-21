import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

import React from 'react'
import card from './pays/card.png'
import qrscan from './pays/qr.svg'
import upi from './pays/upi.jpg'
import { coustomFetch } from '../../utils';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const Payment = ({checkIn,checkOut,numberOfDays,price,roomId,userEmail,roomsData}) => {

  console.log(roomsData.availableRooms);
 
     // modal
  const [show, setShow] = useState(false);
  // =====
  const [paymentMode,setPaymentMode] = useState("");
//   console.log(paymentMode);
const [usersMail,setUsersMail] = useState([]);
const [userId,setUserId] = useState();

 
// console.log(typeof userEmail);
  const newData={
    checkInDate:checkIn,
    checkOutDate:checkOut,
    numberOfDays:numberOfDays,
    price:price,
    hotelRooms:roomId,
    paymentMode:paymentMode,
  }

  // updating rooms

  const UpdateRoomBooking = async(roomsLeft)=>{
    const data = await coustomFetch.put(`/EditRooms/${roomsData.roomId}`,{...newData, availableRooms:roomsLeft})
    // console.log(roomsLeft);
  }

 

  const postData=async(newData)=>{
    // const data = await coustomFetch.post(`/BookingRooms/${userId}`,{...newData});
    console.log(newData);
  }

  const getUserId=async()=>{
    try {
      
      const usersData = await coustomFetch.get("/GetUser");
      
      setUsersMail(usersData.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick=(e)=>{
    e.preventDefault();
    // console.log(newData);
    console.log(userId);
    UpdateRoomBooking(roomsData.availableRooms - 1)
    postData({...newData,userDetails:userId})
    getUserId();
    toast.success("Room booked")
  }

   useEffect(()=>{
  const users = usersMail.find((user)=>{
    if(user.email === userEmail){
      //  console.log(user.userId);
       setUserId(user.userId)
    }
  })
},[show])
 

  
  return (
    <>
    <Button variant="primary" onClick={() => setShow(true)}>
      Make Payment
    </Button>

    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Make Payment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{display:"flex", justifyContent:"center",gap:"1rem",marginBottom:"1rem"}}>
            <Button variant='secondary' onClick={()=>setPaymentMode("qr")}>Qr Scan</Button>
            <Button variant='secondary' onClick={()=>setPaymentMode("upi")}>UPI</Button>
            <Button variant='secondary' onClick={()=>setPaymentMode("card")}>Card</Button>
        </div>
      
      <img src={paymentMode === "qr" ? qrscan : paymentMode === "upi" ? upi : card} alt="payment" style={{display:"block",maxWidth:"30rem",height : "20rem", objectFit:"cover"}} />
      </Modal.Body>

      <Button variant='success' style={{letterSpacing:"1px"}} type='button' onClick={handleClick}>Confirm Payment</Button>
    </Modal>
  </>
  )
}

export default Payment
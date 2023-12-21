import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import card from './pays/card.png'
import qrscan from './pays/qr.svg'
import upi from './pays/upi.jpg'

const CabPayments = (data) => {

    
    const [show, setShow] = useState(false);

    const [paymentMode,setPaymentMode] = useState("");

   
    const handleClick=()=>{
        console.log({...data,paymentMode:paymentMode});
    };

    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Book Now
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

             <img src={paymentMode === "qr" ? qrscan : paymentMode === "upi" ? upi : card} alt="payment" style={{display:"block",width:"30rem",height : "20rem", objectFit:"cover"}} />
          </Modal.Body>

          <Button variant='success' style={{letterSpacing:"1px"}} type='button' onClick={handleClick}>Confirm Payment</Button>

        </Modal>
      </>
    )
}

export default CabPayments
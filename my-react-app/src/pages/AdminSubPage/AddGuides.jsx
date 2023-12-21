import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { coustomFetch } from '../../utils';
import { toast } from 'react-toastify';

const AddGuides = () => {

    const AddGuides=async(data)=>{
        const newData = await coustomFetch.post("/AddGuide",data)
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       const formData = new FormData(e.currentTarget);
       const data = Object.fromEntries(formData);
       console.log(data);
       AddGuides(data);
       e.currentTarget.reset();
       toast.success("guide added")
    }
  return (
    <div  style={{
        position:"absolute",
            top:"8rem",
            height:"100%",
            width:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
  }}
  >
    <section style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"22rem"
    }}>
      <form onSubmit={handleSubmit} >
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Guide Name
        </InputGroup.Text>
        <Form.Control
          name='guideName'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Availeabel District
        </InputGroup.Text>
        <Form.Control
          name='guideDistrict'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          contact number
        </InputGroup.Text>
        <Form.Control
          name='mobile'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
     
      
      <Button type='submit' variant='success'>submit</Button>
      </form>
    </section>
  </div>
  )
}

export default AddGuides
import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { coustomFetch } from '../../utils';
import { toast } from 'react-toastify';
import { render } from 'react-dom';

const AddCabs = () => {

  const [imageData,setImageData] = useState();

  const AddDriver=async(driverData)=>{
    const data = await coustomFetch.post("/AddDriver",driverData);
    // console.log(driver);
    
  }

  const handleChange=(e)=>{
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      setImageData(reader.result)
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    AddDriver({...data,image:imageData})
    toast.success("driver added")
    e.currentTarget.reset();
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
          Driver Name
        </InputGroup.Text>
        <Form.Control
          name='driverName'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          car
        </InputGroup.Text>
        <Form.Control
          name='car'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Model
        </InputGroup.Text>
        <Form.Control
          name='model'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Availeabel District
        </InputGroup.Text>
        <Form.Control
          name='district'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          contact number
        </InputGroup.Text>
        <Form.Control
          name='contactNumber'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          cost per k/m
        </InputGroup.Text>
        <Form.Control
          name='cost'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Form.Group  md="6" controlId="validationCustomUsername">
           <InputGroup hasValidation>
            
            <Form.Control
              name='image'
              type="file"
              placeholder="image"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
      <Button type='submit' variant='success'>submit</Button>
      </form>
    </section>
  </div>
  )
}

export default AddCabs
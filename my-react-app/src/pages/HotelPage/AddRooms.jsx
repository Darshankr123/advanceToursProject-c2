import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { coustomFetch } from '../../utils';
import { toast } from 'react-toastify';


const AddRooms = () => {

    const [validated, setValidated] = useState(false);
    const[imageData,setImageData] = useState();

    const postRooms=async(data)=>{
        const newData = await coustomFetch.post('/AddRooms',data)
        console.log(data);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
     
        postRooms({...data,imageData});
        e.currentTarget.reset();
        toast.success("room added")
    }

    const handleImage=(e)=>{
       
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
         setImageData(reader.result)
        }
    }

  
    
  return (
    <div className='' style={{
        position:"absolute",
        top:"8rem",
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
     }}>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
        marginTop:"18rem",
        paddingBottom:"2rem",
        display:"flex",
        flexDirection:"column",
        gap:"1rem",
        minWidth:"20rem"
    }}>
       <h2 style={{
        marginTop:"10rem",
        fontWeight:"400"
       }}>Add Rooms : </h2>
       
        <Form.Group as={Col} controlId="validationCustomUsername">
           <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">Hotel Name</InputGroup.Text>
            <Form.Control
              name='hotelName'
              type="text"
              placeholder="hotel name"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col}  controlId="validationCustomUsername">
           <InputGroup hasValidation>
           <InputGroup.Text id="inputGroupPrepend">Category</InputGroup.Text>
            <Form.Control
              name='category'
              type="text"
              placeholder="eg . A/c or Non A/c"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>

        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
           <InputGroup hasValidation>
           <InputGroup.Text id="inputGroupPrepend">per day price</InputGroup.Text>
            <Form.Control
              name='price'
              type="text"
              placeholder="0"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
           <InputGroup hasValidation>
           <InputGroup.Text id="inputGroupPrepend">availabel rooms</InputGroup.Text>
            <Form.Control
              name='availableRooms'
              type="text"
              placeholder="0"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
           <InputGroup hasValidation>
           <InputGroup.Text id="inputGroupPrepend">total rooms</InputGroup.Text>
            <Form.Control
              name='totalRooms'
              type="text"
              placeholder="0"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustomUsername">
           <InputGroup hasValidation>
           <InputGroup.Text id="inputGroupPrepend">Ratings</InputGroup.Text>
            <Form.Control
              name='ratings'
              type="text"
              
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
       
        <Form.Group as={Col}  controlId="validationCustomUsername">
           <InputGroup hasValidation>
            
            <Form.Control
              name='image'
              type="file"
              placeholder="image"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleImage}
            />
          </InputGroup>
        </Form.Group>

   
      
      <Button variant='success' type="submit">Submit </Button>
    </Form>  
        
     </div>
  )
}

export default AddRooms
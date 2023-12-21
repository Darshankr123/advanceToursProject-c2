import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { coustomFetch } from '../../utils';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

export const loader=async()=>{
    const data = await coustomFetch.get('/GetHotel')
   return {hotelData:data.data}
}



const AddFood = () => {

    const {hotelData} = useLoaderData();
    // console.log(hotelData);
    const [validated, setValidated] = useState(false);
    const [imageData,setImageData] = useState("");
    const[hotelName,setHotelName] = useState('');
    
    const postFood=async(data)=>{
       const newData = await coustomFetch.post("/AddFood",data)
    // console.log(newData);
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        // console.log({...data,imageData});
        postFood({...data,imageData})
        toast.success("food added");
        e.currentTarget.reset();
    }

   
    
    const handleImage=(e)=>{
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
         setImageData(reader.result)
        }
     }
    const handleChange=(e)=>{
        setHotelName(e.target.value);
    }
//   console.log(imageData);
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
        marginTop:"5rem",
        fontWeight:"400"
       }}>Add Foods : </h2>

        <select value={hotelName} onChange={handleChange} style={{
             borderRadius:"1rem",
             padding:"0.3rem 1rem",
             outline:"none",
             background:"#333",
             color:"#eee",
             textTransform:"capitalize"
             }} >
                 {
                 hotelData.map((hotel)=>{
                     return <option key={hotel.hotelId} >{hotel.hotelName}</option>
                 })
        }
        </select>
        <Form.Group as={Col} controlId="validationCustomUsername">
           <InputGroup hasValidation>
           <InputGroup.Text id="inputGroupPrepend">Hotel</InputGroup.Text>
            <Form.Control
              value={hotelName}
              name='hotelName'
              type="text"
              placeholder='hotel name'
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
       
        <Form.Group as={Col} controlId="validationCustomUsername">
           <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">Type of Food</InputGroup.Text>
            <Form.Control
              name='foodType'
              type="text"
              placeholder="food type"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustomUsername">
           <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">Food Name</InputGroup.Text>
            <Form.Control
              name='foodName'
              type="text"
              placeholder="food name"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>

       
        <Form.Group as={Col}  controlId="validationCustomUsername">
           <InputGroup hasValidation>
            
            <Form.Control
              name='imageData'
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

export default AddFood
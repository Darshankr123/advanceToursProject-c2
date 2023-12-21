import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import {  useQuery } from 'react-query';
import { coustomFetch } from '../../utils';
import axios from 'axios';
import { toast } from 'react-toastify';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const AddTour = () => {
   
    const [validated, setValidated] = useState(false);
    const [selectDist,setSelectDist] = useState('Mysore');
    const [imageData,setImageData] = useState('');
    const [showText,setShowText] = useState(false);

    const {isLoading,isError,data} = useQuery({
      queryKey:["District"],
      queryFn:()=>coustomFetch('/GetDistrict')
    })

    if(isLoading){
      return <p style={{display:"none"}}>Loading...</p>
    }
    if(isError){
      return <p>Error...</p>
    }

    const AddTour= async(data)=>{
      // const newData = await axios.post("http://localhost:8080/AddTour",data)
      // console.log(newData);
      console.log(data);
    }

    const handleImage=(e)=>{
       let file = e.target.files[0];
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload=()=>{
        setImageData(reader.result)
       }
    }
    
    // console.log(imageData);
    const handleSubmit = (event) => {
      
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        // console.log({...data,image:imageData,file:""});
     
        AddTour({...data,image:imageData})

        // toast.success("tour added")
        event.currentTarget.reset();
        setShowText(true)
        setTimeout(()=>{
          setShowText(false)
      },2000)

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      
    };
  
 
  return (
    <div  style={{
        position:"relative",
            top:"8rem",
            height:"100%",
            width:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            zIndex:20
  }}
  >
    
   <p style={{
    background:"#22c55e",
    display:"inline-block",
    borderRadius:"0.3rem",
    color:"#eee",
    letterSpacing:"1px",
    padding:"0.2rem 1rem",
    display:`${showText?"inline-block":"none"}`,
    transition:"all 0.3s linear"
   }}>{showText&&"Tour Added"}</p>

    <select value={selectDist} onChange={(e)=>setSelectDist(e.target.value)} style={{
      padding:'0.3rem 1rem',
      borderRadius:"0.5rem",
      background:"#333",
      color:"#eee",
      marginBottom:"1rem"
    }}>
      {
        data.data.map((dist)=>{
          // console.log(dist);
          return <option key={dist.placeId} style={{
            textTransform:"capitalize"
          }} >{dist.district}</option>
        })
      }
    </select>
     
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-">
        
         
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
           Place<InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">Place Name</InputGroup.Text>
            <Form.Control
              name='place'
              type="text"
              placeholder="place name"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a place name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
           Category<InputGroup hasValidation>
           
            <Form.Control
              name='category'
              type="text"
              placeholder="eg . kids or family or kids&family"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a category.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
           Category<InputGroup hasValidation>
           
            <Form.Control
              name='typeOfPlace'
              type="text"
              placeholder="eg . Historical or Beach"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a type of place.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control name='city' type="text" placeholder="City" value={selectDist} required />
          <Form.Control.Feedback type="invalid" >
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control name='state' type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control name='zip' type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
           file<InputGroup hasValidation>
            
            <Form.Control
              name='image'
              type="file"
              placeholder="image"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleImage}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a image.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>
      

      <Form.Label>History of place</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          name='history'
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      <Form.Label style={{marginTop:"1rem"}}>About place</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          name='about'
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>


      <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Price of Tour</Form.Label>
          <Form.Control name='priceOfTour' type="text" placeholder="price" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>

      <Button variant='success' type="submit">Submit form</Button>
    </Form>

  </div>
  )
}

export default AddTour
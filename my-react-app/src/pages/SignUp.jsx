
import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useMutation, useQueryClient } from 'react-query';
import { coustomFetch } from '../utils';
import {toast} from 'react-toastify'
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';

export const loader =async()=>{
  const data = await coustomFetch.get("/GetDistrict");
  return{district:data.data}
}

const SignUp = () => {
    const {district} = useLoaderData();
    //  console.log(district);
    const [userType,setUserType] = useState('User');
    const [selectCity,setSelectCity] = useState("Mysore");
    const queryClient = useQueryClient();
    // console.log(selectCity);
    const[imageData,setImageData] = useState();
    const[hotelLicence,setHotelLicence] = useState();

    // user post
    const {mutate:createTask} = useMutation({
        mutationFn: (data)=> coustomFetch.post("/AddUser",data),
    })

    // hotel post
    const postData=async(data)=>{
      const newData = await axios.post("http://localhost:8080/AddHotel",data)
      console.log(data);
  }

  const handleImageData=(e)=>{
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
        setImageData(reader.result);
    }
}
  const handleLicenceData=(e)=>{
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
        setHotelLicence(reader.result);
    }
}
    // user func

    const handleSubmitUser=(e)=>{
        e.preventDefault();
        // console.log(input);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
        createTask(data)
        toast.success("signned up successfully")
        e.currentTarget.reset();
    }

    // hotelSubmit

    const handleSubmitHotel=(e)=>{
        
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      // console.log({data,imageData});
      postData({...data,imageData,hotelLicence});
      toast.success("Hotel added")
      // e.currentTarget.reset();
    
  }

  const handleCityChange=(e)=>{
    setSelectCity(e.target.value)
  }
  return (
    <div className='section-center signup-bg ' style={{
      minHeight:"120vh"
    }}>
      <div className='center-content'>
          <div>
            <h2 className='login-title'>Sign Up as {userType}</h2>
            <div className='underline'></div>
          </div>
       
         <div style={{marginBottom:"1rem"}}>

          <Link 
             className='text-light' onClick={()=>setUserType("User")} style={
              {marginRight:"1rem",
              display:`${userType==='User'?"none":"block"}`,
              textDecoration:"none",
              textTransform:"capitalize",
              letterSpacing:"2px",
              borderBottom:"1px solid",
              paddingBottom:"1rem"
            }} 
            >click here for user registration</Link>
          <Link 
             className='text-light' onClick={()=>setUserType("Hotel")} style={
              {display:`${userType==='Hotel'?"none":"block"}`,
              textDecoration:"none",
              textTransform:"capitalize",
              letterSpacing:"2px",
              borderBottom:"1px solid",
              paddingBottom:"1rem"
            }}
            >click here for hotel registration</Link>
         </div>
         {
           userType === "User" ? 
           (
           <Form onSubmit={handleSubmitUser} >
         <InputGroup className="mb-3">
          <InputGroup.Text>First Name</InputGroup.Text>
          <Form.Control aria-label="first name" name='first_name'  />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Text>Last Name</InputGroup.Text>
          <Form.Control aria-label="last name" name='last_name'  />
          </InputGroup>
         <InputGroup className="mb-3">
          <InputGroup.Text>email</InputGroup.Text>
          <Form.Control aria-label="email" name='email' />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Text>Password</InputGroup.Text>
          <Form.Control aria-label="password" name='password'  />
          </InputGroup>
          <Button variant="success" className='login-btn' type='submit'>submit</Button>
         </Form> 
         )
         : ( 
          <div className=''  >
            <select  value={selectCity} onChange={handleCityChange}
           style={{
            borderRadius:"1rem",
            padding:"0.3rem 1rem",
            outline:"none",
            background:"#333",
            color:"#eee",
            textTransform:"capitalize",
            width:"10rem",
            textAlign:"center",
            display:"grid",
            marginBottom:"1rem",
            marginLeft:"16rem",
          }}>
          {
            district.map((dist)=>{

             return <option key={dist.placeId} >{dist.district}</option>
            })
          }
          </select>
         <form onSubmit={handleSubmitHotel}>
          <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">
             Hotel Name
             </InputGroup.Text>
             <Form.Control
              name='hotelName'
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              required
             />
          </InputGroup>
          <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">
             Hotel address
             </InputGroup.Text>
             <Form.Control
              name='hotelAddress'
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              required
              />
          </InputGroup>
          <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">
             city
             </InputGroup.Text>
             <Form.Control
              name='hotelDistrict'
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={selectCity}
              required
             />
          </InputGroup>
          <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">
             email
             </InputGroup.Text>
             <Form.Control
              name='email'
              type='email'
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
           
              required
             />
          </InputGroup>
          <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">
             password
             </InputGroup.Text>
             <Form.Control
              name='password'
              type='password'
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            
              required
             />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
             Hotel image
             </InputGroup.Text>
             <Form.Control
              type='file'
              name='imageData'
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleImageData}
              required
              />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
             Hotel Licence
             </InputGroup.Text>
             <Form.Control
              type='file'
              
              name='hotelLicence'
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleLicenceData}
              required
              />
          </InputGroup>
          <div className="d-grid ">
             <Button variant="success" 
             type='submit' size="sm" style={{
               fontSize:"1.1rem",
               letterSpacing:"2px"
              }}>
                 Submit
             </Button>
       
          </div>
         </form> 
          </div>
         )
         
        }
        
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp
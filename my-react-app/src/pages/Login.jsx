import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Footer from '../components/Footer';

const Login = () => {

  const [userid, setUserid] = useState("")
  const [password, setPassword] = useState("")
  const [userType,setUserType] = useState('')

  const navigate = useNavigate();

  let newValue;

  const postData=async(newValue)=>{
     const {data} = await axios.post("http://localhost:8080/UserLogin",newValue)
    try{
      if(data === "user"){
        // console.log(data);
        navigate("/userpannel")
      }
      else if(data === "Admin"){
        navigate("/adminpannel")
      }
      else if (data === "hotelAdmin") {
        navigate('/hotelpannel')
      }
    }
    catch{
      console.log('please select user type');
    }
    //  console.log(newValue);
  }
  const handleLogin=(e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = Object.fromEntries(formData);

    if(userType === "user"){
      newValue = {...value,usertype:userType}
      postData(newValue)
      console.log(newValue);
       sessionStorage.setItem("user",JSON.stringify(newValue))

    }
    else if(userType === "admin"){
      newValue = {...value,usertype:userType}
      postData(newValue);
    }
    else{
      newValue = {...value,usertype:userType}
      postData(newValue);
    }
  }

  return (
    <div className='section-center section-center-bg'>
      <div className='center-content'>
          <div>
            <h2 className='login-title'>Login</h2>
            <div className='underline'></div>
          </div>
          <div style={{
            marginBottom:"1rem",
            display:"flex",
            gap:"1rem",
            
          }}>
            <Button  variant="success" style={{
              textTransform:"capitalize",
              letterSpacing:"1px"
            }} 
            onClick={()=>setUserType("user")}
            >user</Button>
            <Button  variant="success" style={{
              textTransform:"capitalize",
              letterSpacing:"1px"
            }}
            onClick={()=>setUserType("admin")}
            >admin</Button>
            <Button  variant="success" style={{
              textTransform:"capitalize",
              letterSpacing:"1px"
            }}
            onClick={()=>setUserType("hotel")}
            >hotel</Button>
          </div>
        
         <Form onSubmit={handleLogin}>
          
         <InputGroup className="mb-3">
          <InputGroup.Text>email</InputGroup.Text>
          <Form.Control aria-label="email" value={userid} name='email' type='email' onChange={(e)=>setUserid(e.target.value)} />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Text>Password</InputGroup.Text>
          <Form.Control aria-label="password"  value={password} name='password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
          </InputGroup>
          <Button variant="success" className='login-btn' type='submit'>submit</Button>
         </Form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
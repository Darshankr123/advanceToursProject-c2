import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { coustomFetch } from '../../utils';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import CabPayments from './CabPayments';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const loader=async({params})=>{
  const id = params.id;
  const data = await coustomFetch.get(`/GetCabsById/${id}`);
  // console.log(data);
  return {cabDetails:data.data}
}

const BookCab = () => {

  const {cabDetails} = useLoaderData();

  const [numberOfKms,setNumberOfKms] = useState("");

  const [bookDate,setBookDate] = useState('');
  const [endDate,setEndDate] = useState("");


  // console.log(cabDetails);
  const {driverId,driverName,image,model,district,cost,contactNumber,car} = cabDetails

  
  const costPerKM = parseInt(cost);

  const totalCost = costPerKM*numberOfKms+ (numberOfKms<50?1000 : numberOfKms<100 ? 1500 : 2000);

  const newData = {
    driverName:driverName,
    carModel:model,
    district:district,
    car:car,
    totalCost:totalCost,
    tripDate:bookDate,
    endDate:endDate,
  }
  
  return (
    <div style={{background:"#333"}}>

      <Card className=" " style={{
        background:"#333"
      }}>
        <Card.Img src={image} alt="Card image" style={{
          height:"90vh",
          objectFit:"cover"
        }}/>
        <Card.ImgOverlay style={{
          top:"4rem",
          left:"2rem",
          background:"#64748b",
          width:"fit-content",
          height:"fit-content",
          opacity:70,
          borderRadius:"1rem"
        }}>

          <div style={{
            display:"flex",
            alignItems:"center",
            
          }}>
          <Card.Title style={{
            background:"#eee",
            width:"fit-content",
            padding:"0.5rem 1rem",
            borderRadius:"1rem"
          }}>Driver Name</Card.Title>
          <Card.Text style={{
            background:"#333",
            borderRadius:"1rem",
            color:"#eee",
            padding:"0.5rem 1rem",
            width:"fit-content",
            marginLeft:"1rem"
          }}>
             {driverName}
          </Card.Text>
          
          </div>
          
          <div style={{
            display:"flex",
            alignItems:"center",
            
          }}>
          <Card.Title style={{
            background:"#eee",
            width:"fit-content",
            padding:"0.5rem 1rem",
            borderRadius:"1rem"
          }}>Car</Card.Title>
          <Card.Text style={{
            background:"#333",
            borderRadius:"1rem",
            color:"#eee",
            padding:"0.5rem 1rem",
            width:"fit-content",
            marginLeft:"1rem"
          }}>
             {car}
          </Card.Text>
          
          </div>
          
          <div style={{
            display:"flex",
            alignItems:"center",
            
          }}>
          <Card.Title style={{
            background:"#eee",
            width:"fit-content",
            padding:"0.5rem 1rem",
            borderRadius:"1rem"
          }}>model</Card.Title>
          <Card.Text style={{
            background:"#333",
            borderRadius:"1rem",
            color:"#eee",
            padding:"0.5rem 1rem",
            width:"fit-content",
            marginLeft:"1rem"
          }}>
             {model}
          </Card.Text>
          
          </div>

          
          <div style={{
            display:"flex",
            alignItems:"center",
            
          }}>
          <Card.Title style={{
            background:"#eee",
            width:"fit-content",
            padding:"0.5rem 1rem",
            borderRadius:"1rem"
          }}>District</Card.Title>
          <Card.Text style={{
            background:"#333",
            borderRadius:"1rem",
            color:"#eee",
            padding:"0.5rem 1rem",
            width:"fit-content",
            marginLeft:"1rem"
          }}>
             {district}
          </Card.Text>
          
          </div>

          
          <div style={{
            display:"flex",
            alignItems:"center",
            
          }}>
          <Card.Title style={{
            background:"#eee",
            width:"fit-content",
            padding:"0.5rem 1rem",
            borderRadius:"1rem"
          }}>Contact Number</Card.Title>
          <Card.Text style={{
            background:"#333",
            borderRadius:"1rem",
            color:"#eee",
            padding:"0.5rem 1rem",
            width:"fit-content",
            marginLeft:"1rem"
          }}>
             {contactNumber}
          </Card.Text>
          
          </div>

          <section>
            <div style={{
              marginTop:"1rem"
            }} >
              <InputGroup size="md" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"> Number of kms</InputGroup.Text>
              <Form.Control
               value={numberOfKms}
               onChange={(e)=>setNumberOfKms(e.target.value)}
               type='text'
               aria-label="Small"
               aria-describedby="inputGroup-sizin  g-sm"
              />
            </InputGroup>

            <InputGroup size="md" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"> Date of Booking</InputGroup.Text>
              <Form.Control
               value={bookDate}
               onChange={(e)=>setBookDate(e.target.value)}
               type='date'
               aria-label="Small"
               aria-describedby="inputGroup-sizin  g-sm"
              />
            </InputGroup>

            <InputGroup size="md" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"> Date of Trip End</InputGroup.Text>
              <Form.Control
               value={endDate}
               onChange={(e)=>setEndDate(e.target.value)}
               type='date'
               aria-label="Small"
               aria-describedby="inputGroup-sizin  g-sm"
              />
            </InputGroup>

            </div>

           
          </section>
          
           <p style={{
            fontSize:"22px",
            color:"#eee",
            letterSpacing:"1px"
           }}>Cost Of Cab 
            <span style={{textDecoration:"underline",marginLeft:"1rem"}}>
             {totalCost}
            </span>
           </p>

          <CabPayments {...newData}/>
           
           
         </Card.ImgOverlay>
      </Card>

    </div>
  )
}

export default BookCab 
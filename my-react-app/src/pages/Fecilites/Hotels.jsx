import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { coustomFetch } from '../../utils';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const loader=async()=>{
  const data = await coustomFetch.get('/GetHotel');
  return {hotels:data.data};
}

const Hotels = () => {
  const {hotels} = useLoaderData();
  console.log(hotels);
  return (
    <div className='section-center section-center-explore'>
        
        <div className='page-center cars-center'>
        {
           hotels.map((hotel)=>{
            console.log(hotel);
            const {hotelId,hotelName,hotelPrice,hotelAddress,hotelDistrict,imageData} = hotel;
            
            return <div key={hotelId}>
                <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={imageData} style={{
                                 height:"15rem",
                                 objectFit:"cover",
                                 objectPosition:"center"
                                 }} />
                         <Card.Body style={{
                              display:"flex",
                                 flexDirection:"column",
                                 justifyContent:"center",
                                 alignItems:"center"
                     }} >
            
                       <Card.Title>{hotelName}</Card.Title>
                       <section style={{textAlign:"center"}}>

                        <div>
                            <Card.Text  >price per day : {hotelPrice} </Card.Text>
                        </div>
                        <div>
                            <Card.Text >address : {hotelAddress}</Card.Text>
                        </div>
                        <div>
                            <Card.Text > District : {hotelDistrict}</Card.Text>
                        </div>
                       </section>
                    </Card.Body>

                    <Link to={`/bookroom/${hotelId}`} style={{zIndex:1000,textAlign:"center"}} className='navlink'>
                    <Button variant='primary'>
                      
                      Book Now
                    </Button>
                      </Link>
                   
                   </Card>
                 
                </div> 

              })
        } 
        </div>
      
    </div>
  )
}

export default Hotels
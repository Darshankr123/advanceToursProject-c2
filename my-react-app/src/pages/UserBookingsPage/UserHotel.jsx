import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useQuery } from 'react-query';
import { coustomFetch } from '../../utils';
import {Link} from 'react-router-dom'

const UserHotel = ({tourPlace}) => {
    // console.log(tourPlace);
    const {isLoading,isError,data} = useQuery({
        queryFn:()=> coustomFetch.get("/GetHotel")
    })
    if(isLoading){
        return <p>Loading...</p>
    }
    if(isError){
        return <p>Error...</p>
    }
   

    const formatedCities = data.data.filter((place)=>{
        return tourPlace.toLowerCase() === place.hotelDistrict.toLowerCase();
    
    })

       
  return (
    <div style={{
        paddingTop:"2rem"
    }}>
        <h2 className='page-title-dark' style={{
            marginBottom:"2rem"
        }}>near by hotels</h2>
        <section style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center",
            gap:"2rem"
        }} >
        {   formatedCities.length === 0 ? <h2>No Hotels near by </h2> :
            formatedCities.map((hotel)=>{
                // console.log(hotel);
                const {hotelId,hotelName,hotelAddress,hotelDistrict,imageData} = hotel;
                
                return <div  key={hotelId}>
                            
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
                
                <Card.Title>hotel name :{hotelName}</Card.Title>
                  <section style={{textAlign:"center"}}>
    
                  
                   <div>
                       <Card.Text >address : {hotelAddress}</Card.Text>
                   </div>
                   <div>
                       <Card.Text > District : {hotelDistrict}</Card.Text>
                   </div>
                   </section>
                   <Link to={`/roombookings/${hotelId}`}>Book Now</Link>
              </Card.Body>
            </Card>
            
        </div>
            })
        }
        </section>
        </div>
  )
}

export default UserHotel
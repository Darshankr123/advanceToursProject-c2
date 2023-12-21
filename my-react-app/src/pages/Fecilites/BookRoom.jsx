import React, { useEffect, useState } from 'react'
import { coustomFetch } from '../../utils'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

export const loader=async({params})=>{
    const id = params.id;
    // console.log(id);
   const data = await coustomFetch.get(`/GetHotelById/${id}`);
//    console.log(data);
   return {hotelName:data.data.hotelName}
}

const UserRoomBooking = () => {

    const {hotelName} = useLoaderData();
    const [roomsData,setRoomsData] = useState([]);


    // console.log(hotelName);

    const navigate = useNavigate();

    const getRoomsData = async()=>{

        try {
            const data = await coustomFetch.get("/GetRooms");
            setRoomsData(data.data)
        } catch (error) {
           
            console.log(error.message);
        }
    }
    useEffect(()=>{
       getRoomsData();
    },[])

    // console.log(roomsData);

    const formatedRooms=roomsData.filter((room)=>{
        return room.hotelName.toLowerCase().trim() === hotelName.toLowerCase().trim();
    })

    console.log(formatedRooms);

  return (

    <div style={{
        paddingTop:"2rem"
    }}>
        <h2 className='page-title-dark' style={{
            marginBottom:"2rem"
        }}>rooms in your list</h2>
        <section style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center",
            gap:"2rem"
        }} >
        {   formatedRooms.length === 0 ? <h2>No Rooms in Your Place </h2> :
            formatedRooms.map((rooms)=>{
                // console.log(rooms);
                const {roomId,hotelName,category,price,imageData,ratings,availableRooms
                    ,totalRooms} = rooms;

                  
              
                return <div  key={roomId}>
                            
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
                
                <Card.Title style={{textTransform:"capitalize"}}>hotel name :{hotelName}</Card.Title>
                  <section style={{textAlign:"center"}}>
    
                  
                   <div>
                       <Card.Text >category : {category}</Card.Text>
                   </div>
                   <div>
                       <Card.Text > price : {price}</Card.Text>
                   </div>
                   <div>
                       <Card.Text > ratings : {ratings}</Card.Text>
                   </div>

                   <div>
                       <Card.Text >availabel rooms : {availableRooms}</Card.Text>
                   </div>
                   <div>
                       <Card.Text >total rooms : {totalRooms}</Card.Text>
                   </div>
                   <Button variant='secondary' >

                   <Link to={`/userinfo/${roomId}`} style={{
                    color:"#eee",
                    textDecoration:"none"
                   }}>Book room</Link>
                   </Button>
                   </section>
                  
              </Card.Body>
            </Card>
            
        </div>
            })
        }
        </section>
        </div>
  )
}

export default UserRoomBooking
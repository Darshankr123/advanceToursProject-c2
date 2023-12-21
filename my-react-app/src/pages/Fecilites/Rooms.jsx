import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { coustomFetch } from '../../utils'
import { Card } from 'react-bootstrap'

export const loader = async()=>{
  const data = await coustomFetch.get('/GetRooms');
  return {rooms:data.data}
}

const Rooms = () => {

  const {rooms} = useLoaderData();
  // console.log(rooms);
  return (
    <div className='section-center section-center-explore'>
        
        <div className='page-center cars-center'>
        {
           rooms.map((room)=>{
            console.log(room);
            const {roomId,category,hotelName,imageData,ratings} = room;
            
            return <div key={roomId}>
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
                            <Card.Text  >category : {category} </Card.Text>
                        </div>
                        <div>
                            <Card.Text >ratings : {ratings}</Card.Text>
                        </div>
                       
                       </section>
                       
                        
                     
                    </Card.Body>
                   </Card>
                       </div> 
             })
        } 
        </div>
    </div>
  )
}

export default Rooms
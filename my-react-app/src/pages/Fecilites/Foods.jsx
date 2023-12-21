import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { coustomFetch } from '../../utils'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export const loader = async()=>{
    const {data} = await coustomFetch.get("/GetFood");
    // console.log(data);
    return data;
}
const Foods = () => {
    const foodData = useLoaderData();
    // console.log(foodData);
  return (
    <div className='section-center section-center-explore'>
        
    <div className='page-center cars-center'>
        {
            foodData.map((food)=>{
                const {foodId,foodName,foodType,hotelName,imageData} = food;
                // console.log(food);
                return  <div key={foodId}>
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
            
                       <Card.Title>{foodName}</Card.Title>
                       
                        <div>
                            <Card.Text  >foodtype : {foodType} </Card.Text>
                        </div>
                        <div>
                            <Card.Text > hotelname : {hotelName}</Card.Text>
                        </div>
                        
                     <Button variant="dark" style={{marginTop:"1rem"}} >Order Food</Button>
                    </Card.Body>
                   </Card>
              </div> 
            })
        }
    </div>
    </div>
    
  )
}

export default Foods
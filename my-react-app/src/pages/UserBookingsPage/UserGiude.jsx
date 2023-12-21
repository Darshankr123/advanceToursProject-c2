import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { coustomFetch } from '../../utils'
import { Card } from 'react-bootstrap'

const UserGiude = ({tourPlace}) => {
   
    const [guides,setGuides] = useState([]);
   let newData;
   const getGuides = async()=>{
    newData = await coustomFetch.get("/GetGuides");
    setGuides(newData.data)
}

useEffect(()=>{
    getGuides();
},[])



const formatedGuides = guides.filter((place)=>{
    return tourPlace.toLowerCase() === place.guideDistrict.toLowerCase();

})

// console.log(formatedGuides);
  return (
    <div style={{
        paddingTop:"2rem"
    }}>
        <h2 className='page-title-dark' style={{
            marginBottom:"2rem"
        }}>near by Guides</h2>
        <section style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center",
            gap:"2rem"
        }} >
        {   formatedGuides.length === 0 ?
         <h2>No Hotels near by </h2> 
         :
         formatedGuides.map((guide)=>{
                     const {guideId,guideName,guideDistrict,mobile} = guide
                         return  <Card border="info" style={{ width: '18rem' }} key={guideId}>
                            <Card.Header>Name : {guideName}</Card.Header>
                            <Card.Body>
                              <Card.Title>District : {guideDistrict}</Card.Title>
                              <Card.Title>phno : {mobile}</Card.Title>
                              
                        </Card.Body>
                         </Card>
                    })
        }
        </section>
        </div>
  )
}

export default UserGiude
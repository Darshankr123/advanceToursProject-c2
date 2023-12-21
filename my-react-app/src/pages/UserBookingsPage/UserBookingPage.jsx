import axios from 'axios'
import React from 'react'
import { coustomFetch } from '../../utils'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Card } from 'react-bootstrap'
import UserHotel from './UserHotel'
import UserGiude from './UserGiude'
import UserCabs from './UserCabs'

export const loader = async({params})=>{
    const id = params.id;
    // console.log(id);
    const data = await coustomFetch.get(`/GetToursById/${id}`)
    // console.log(data);
    return {tourPlace:data.data};
}


const UserBookingPage = () => {

    const {tourPlace} = useLoaderData(); 
    // console.log(tourPlace); 

    const {tourId,category,city,image,place,state,zip,about,history} = tourPlace;

    return  <div className='section-center page-bg ' >
         <div className='page-center cards' style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:"1rem",
        borderBottom:"2px solid",
        
      }}>
        <div style={{
            height:"100%",
            borderTopRightRadius:"5rem",
            borderBottomRightRadius:"3rem",
            borderTopLeftRadius:"1rem",
            borderBottomLeftRadius:"1rem",
            marginTop:"-4rem",    
        }}>
           <img src={image} alt="" style={{
            height:"90vh",
            width:"100vw",
            display:"inline-block",
            objectFit:"cover",
            borderTopLeftRadius:"1rem",
            borderBottomLeftRadius:"1rem",
            background:"gray",
            opacity:70,
           }} />
           <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
          
            width:"90vw",
            margin:"2rem auto"
            // position:"absolute",
            // top:"8rem",
            // background:"gray",
            // opacity:"85%",
            // padding:"2rem 5rem"
           }}>
            <p className='span-ele-text'><span className='span-ele'>category</span> : {category}</p>
            <p  className='span-ele-text'><span className='span-ele'>city</span> : {city}</p>
            <p className='span-ele-text' ><span className='span-ele'>place</span> : {place}</p>
            <p className='span-ele-text'><span className='span-ele'>state</span> : {state}</p>
            <p className='span-ele-text'><span className='span-ele'>zip</span> : {zip}</p>
            <p className='span-ele-text'><span className='span-ele' style={{display:"block"}}>history</span> : {history}</p>
            <p className='span-ele-text'><span className='span-ele' style={{display:"block"}}>about</span> : {about}</p>
           </div>
        </div>
        <div>

         <UserHotel tourPlace={tourPlace.city}/>
         <UserGiude tourPlace={tourPlace.city}/>
         <UserCabs tourPlace={tourPlace.city}/> 
        </div>
      </div>
      </div>
}

export default UserBookingPage
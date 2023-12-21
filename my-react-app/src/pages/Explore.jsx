import React, { useState } from 'react'

import ExploreToursData from '../components/ExploreToursData';
import {  useQuery } from 'react-query';
import { coustomFetch } from '../utils';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export const loader = async () => {
  const data = await coustomFetch.get("GetTours");
  return {tourData:data.data}
}

const Explore = () => {

  let {tourData} = useLoaderData();
  

  const [category,setCategory] = useState("all");
  // console.log(category);

  // const {isLoading,isError,data} = useQuery({
  //   queryKey:['tourCategory'],
  //   queryFn:()=>coustomFetch("GetTours")
  // })
 
  // if(isLoading){
  //   return <p>Loading...</p>
  // }
  // if(isError){
  //   return <p>Error...</p>
  // }
  // console.log(data);
  const filterPlace =  tourData.filter((place)=>place.category === category);
  // console.log(filterPlace);

  console.log(category);
  return (
    <div className='section-center section-center-explore'>
      <div className='explore-center'>
      <div className='explore-form'>
      
      <select  value={category} onChange={(e)=>setCategory(e.target.value)}  style={{
        
        position:"absolute",
        right:"10rem",
        borderRadius:"1rem",
        padding:"0.3rem 1rem",
        outline:"none",
        background:"#333",
        color:"#eee",
        textTransform:"capitalize"
      }} >
      
      <option>category</option>
      <option>family</option>
      <option >kids</option>
      <option>kids&family</option>
    </select>
      </div>

    <div className='cards'> 
      
       {
        category === "all" ?  tourData.map((place)=>{
          // console.log(place);
          return <ExploreToursData key={place.tourId} {...place}/>
        }) 
        :
        filterPlace.map((place)=>{
          // console.log(place);
          return <ExploreToursData key={place.tourId} {...place}/>
        })
        // tourData.map((place)=>{
        //   return <ExploreToursData key={place.tourId} {...place}/>
        // })
        }
       
       
       </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Explore
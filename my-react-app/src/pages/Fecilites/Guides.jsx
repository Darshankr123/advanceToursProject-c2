import React from 'react'
import Card from 'react-bootstrap/Card';
import { useQuery } from 'react-query';
import { coustomFetch } from '../../utils';

const Guides = () => {

    const {isLoading,isError,data} = useQuery({
        queryFn:()=>coustomFetch.get("/GetGuides")
    });

    if(isLoading){
        return <p>Loading...</p>
    }
    if(isError){
        return <p>Error...</p>
    }
    // console.log(data);
  return (
    <div className='section-center section-center-explore'>
        
        <div className='page-center cars-center'>

            {
                data.data.map((guide)=>{
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
       
        </div>
    </div>

  )
}

export default Guides
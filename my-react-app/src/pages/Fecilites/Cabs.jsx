import React from 'react'
import { useQuery } from 'react-query'
import { coustomFetch } from '../../utils'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cabs = () => {

    const {isLoading,isError,data} = useQuery({
        queryFn:()=>coustomFetch.get("/GetDriver")
    })
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error...</div>
    }
    // console.log(data);
  return (
    <div className='section-center section-center-explore'>
        
        <div className='page-center cars-center'>
        {
           data.data.map((driver)=>{
            const{driverId,driverName,car,model,district,contactNumber,image} = driver
            return <div key={driverId}>
                <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={image} style={{
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
            
                       <Card.Title>{driverName}</Card.Title>
                       
                        <div>
                            <Card.Text  >car : {car} </Card.Text>
                        </div>
                        
                        <div>
                            <Card.Text >district : {district}</Card.Text>
                        </div>
                        
                        
                        <Link to={`/bookcab/${driverId}`} style={{zIndex:100}}>Book cab</Link>
                     {/* <Button variant="dark" style={{marginTop:"1rem"}} >Book cab</Button> */}
                    </Card.Body>
                   </Card>
                       </div> 
                      })
        } 
        </div>
    </div>
  )
}

export default Cabs
import React from 'react'
import { Card } from 'react-bootstrap'

const Activites = () => {
  return (
    <div className='d-flex mt-5 pb-5 flex-wrap justify-content-center align-items-center g-col-6'>

<Card border="secondary" style={{ width: '18rem', margin:"1rem",background:"gray",color:"#eee",letterSpacing:"1px" }}>
        <Card.Header>Responsive Design</Card.Header>
        <Card.Body>
          <Card.Title>User Friendly </Card.Title>
          <Card.Text>
          Responsive Mobile Friendly Travel Website design
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
<Card border="secondary" style={{ width: '18rem', margin:"1rem",background:"gray",color:"#eee",letterSpacing:"1px" }}>
        <Card.Header>Reviews</Card.Header>
        <Card.Body>
          <Card.Title>User Intaraction</Card.Title>
          <Card.Text>
          Customer reviews & Social media
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
<Card border="secondary" style={{ width: '18rem', margin:"1rem",background:"gray",color:"#eee",letterSpacing:"1px" }}>
        <Card.Header>Destination</Card.Header>
        <Card.Body>
          <Card.Title>Destination info</Card.Title>
          <Card.Text>
          Destination details with HD images
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
<Card border="secondary" style={{ width: '18rem', margin:"1rem",background:"gray",color:"#eee",letterSpacing:"1px" }}>
        <Card.Header>VR</Card.Header>
        <Card.Body>
          <Card.Title>Vertual</Card.Title>
          <Card.Text>
          Virtual Reality (VR)
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
<Card border="secondary" style={{ width: '18rem', margin:"1rem",background:"gray",color:"#eee",letterSpacing:"1px" }}>
        <Card.Header>Price</Card.Header>
        <Card.Body>
          <Card.Title>Best Price</Card.Title>
          <Card.Text>
          Transparent in Pricing
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
<Card border="secondary" style={{ width: '18rem', margin:"1rem",background:"gray",color:"#eee",letterSpacing:"1px" }}>
        <Card.Header>Bookings</Card.Header>
        <Card.Body>
          <Card.Title>Easy Bookings</Card.Title>
          <Card.Text>
          Easy booking system
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

     
    </div>
  )
}

export default Activites
import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Feedback = () => {
  return (
    <div className='section-center page-bg'  >
      <div className='page-center pages-view-center'  >
         <h2 style={{
          color:"#1e293b",
          textTransform:"capitalize",
          letterSpacing:"2px",
          marginBottom:"2rem",
          borderRight:"10px solid #fbbf24",
          borderBottom:"10px solid #fbbf24",
          width:"fit-content",
          padding:"1rem",
          borderRadius:"60%"
         }}>feed back</h2>
         <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{
            width:"20rem",
            height:"10rem"
          }}
        />
      </FloatingLabel>
      </div>
    </div>
  )
}

export default Feedback
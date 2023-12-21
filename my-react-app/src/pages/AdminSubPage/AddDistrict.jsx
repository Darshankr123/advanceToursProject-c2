import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useMutation } from 'react-query';
import { coustomFetch } from '../../utils';

const AddDistrict = () => {

    const [district,setDistrict] = useState('');

    const [showText,setShowText] = useState(false);

    const {mutate:AddDistrict} = useMutation({
        mutationFn:({district})=>coustomFetch.post("/AddDistrict",{district})
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(district);
        AddDistrict({district});
        setDistrict('')
        setShowText(true);
        setTimeout(()=>{
            setShowText(false)
        },1000)
    }
  return (
    <div  style={{
        position:"absolute",
            top:"8rem",
            height:"100%",
            width:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
  }}
  >
   <div style={{
    textAlign:"center",
    marginTop:"8rem",
   
   }}>
   <h2 style={{
    fontWeight:400,
    letterSpacing:"2px",
    paddingBottom:"1rem"
   }}>Add District</h2>
   <p style={{
    background:"#22c55e",
    display:"inline-block",
    borderRadius:"0.3rem",
    color:"#eee",
    letterSpacing:"1px",
    padding:"0.2rem 1rem",
    display:`${showText?"inline-block":"none"}`,
    transition:"all 0.3s linear"
   }}>{showText&&"District Added"}</p>
   <Form onSubmit={handleSubmit}>

    <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Distrct</InputGroup.Text>
        <Form.Control
          value={district}
          onChange={(e)=>setDistrict(e.target.value)}
          type='text'
          name='district'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          />
      </InputGroup>
      <Button variant='success' style={{
        marginTop:"1rem",
        textTransform:"capitalize",
        letterSpacing:"1px",
        fontWeight:200
        }}  type='submit'>submit</Button>
    </Form>
   </div>
  </div>
  )
}

export default AddDistrict
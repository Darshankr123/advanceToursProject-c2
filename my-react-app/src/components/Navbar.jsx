import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function TextLinkExample() {
  return (
    <>
   
  <Navbar expand="lg" className="navbar">
      <Container className='navbar-container'>
      <div>
      <NavLink href="/" className='logo' style={{
        fontSize:"2rem",
        color:"#fbbf24",
        fontWeight:600,
        letterSpacing:"2px"
      }}>welcome</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle' style={{
          position:"absolute",
          top:"0.8rem",
          right:"1rem",
          background:"#eee",
          border:"none",
          fontSize:"1rem",
          borderRadius:"5rem",
          outline:"none",
          backgroundColor:"#fbbf24"
        }} />
      </div>
          <div style={{
              justifySelf:"flex-end"
          }}>
              <Navbar.Collapse id="basic-navbar-nav" >

          <Nav className="me-auto navlinks " >
                <NavLink to='/' className='navlink'>Home</NavLink>
                <NavLink to='/explore' className='navlink'>explore</NavLink>
                <NavLink to='/login' className='navlink'>login</NavLink>
                <NavLink to='/signup' className='navlink'>sign up</NavLink>
                
                <NavLink to='/emergency-contact' className='navlink'>Emergency contact</NavLink>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </>
  );
}

export default TextLinkExample;
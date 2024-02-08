import React, {useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Image, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nails from './nailsandlashes.png';



export default function NavBarComponent() {
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState('');


  const handleHover = () => {
    setIsHovered(true);
    setColor('bg-info');
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };




  return (
    <div>
      <Navbar style={{ background: "rgba(189,195,199, 0.2)" }} expand="sm" className="shadow rounded w-100 h-100">
      <Container >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />



        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto float-left">
            <NavDropdown title="Menu" className='bg-light border rounded ' id="basic-nav-dropdown" >
              <NavDropdown.Item href="#">
              Home
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="#footer">
                Contact
              </NavDropdown.Item>

              <NavDropdown.Item>
            Career </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Image
        src={Nails}
        roundedCircle
        className='mx-1 col-sm-1 col-md-1'
        />
        <Navbar.Brand href="#home">Nails and Lashes</Navbar.Brand>
      </Container>



      </Navbar>
    </div>
  );
}





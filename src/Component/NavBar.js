import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewImage from './Image';

export default function NavBarComponent() {
  return (
    <div>
      <Navbar expand="sm" className="bg-light border border-secondary vw-100 vh-100 mx-0">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Menu" className='bg-light border border-secondary rounded' id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Home</NavDropdown.Item>
                <NavDropdown.Item href="#">About</NavDropdown.Item>
                <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#">Resume</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <div className="d-flex align-items-center">
            <Image src={NewImage} thumbnail roundedCircle width="50" height="50" />
            <Navbar.Brand href="#home">Personal Portfolio</Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

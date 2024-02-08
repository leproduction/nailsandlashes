import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
const contact = [ {
    name: "Hau Le",
    phone: "954-842-9190",
    email: "haule.jan.20@gmail.com"
}]
export default function ContactEmer() {
  return (

    <Container align="center" fluid className='bg-light border border-info mx-0 my-1 py-3'>
        { contact.map(mycontact => (<Row key={mycontact.email}>
            <Col><p>{mycontact.name}</p>
            </Col>
            <Col><p>{mycontact.phone}</p>
            </Col>
            <Col><p>{mycontact.email}</p>
            </Col>
        </Row>))} 
    </Container>

  )
}


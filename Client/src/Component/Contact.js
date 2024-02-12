import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Container, Row, Col } from 'react-bootstrap';
const contact = [ {

    phone: "954-440-4390",
    address:"7740 W Commercial Blvd, Lauderhill, FL 33351",
    yelp:"https://www.yelp.com/biz/nails-and-lashes-tamarac"

}]
export default function ContactEmer() {
  return (

    <Container  id="footer" style={{ background: "rgba(189,195,199, 0.3)" }}  align="center" fluid className='shadow rounded mx-0 my-1 py-3'>
        { contact.map(mycontact => (<Row key={mycontact.phone}>

            <Col ><a className='text-decoration-none' href="tel:954-440-4390"><p className='text-black'>{mycontact.phone}</p></a>
            </Col>
            <Col><a className='text-decoration-none' href="https://maps.app.goo.gl/EcuSfFx2SZtQg3zr6"><p className='text-black'>{mycontact.address}</p></a>
            </Col>
            <Col><a className='text-decoration-none' href="https://www.yelp.com/biz/nails-and-lashes-tamarac"><p className='text-dark'><i class="bi bi-yelp"></i>Yelp</p></a>
            </Col>
        </Row>))}
    </Container>

  )
}


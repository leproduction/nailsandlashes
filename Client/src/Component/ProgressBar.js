import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, ProgressBar, Container, Button} from 'react-bootstrap'
export default function ProgressiveBar() {
  return (
    <Container style={{ background: "rgba(189,195,199, 0.3)" }}  fluid className='shadow rounded mx-auto d-flex justify-content-cent align-items-center py-3'>

    <Row align="center" className='mx-auto'>
      <smal><h5 className='text-dark text-center mx-0'>Not only your services that you are getting play important role in our charity wish list but also your small action leads to huge change in someone's life. We will donate 5% annual revenue to charity. Please help us achieve the goal.</h5></smal>
    <ProgressBar now={79} animated variant='secondary' />
    <Row  className='p-1 col-md-1 col-md-1 mx-auto' ><Button variant="outline-light" className='text-dark'><i class="bi bi-piggy-bank-fill"></i></Button></Row>
    </Row>
    </Container>
  )
}

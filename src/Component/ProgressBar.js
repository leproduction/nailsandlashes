import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, ProgressBar, Container} from 'react-bootstrap'
export default function ProgressiveBar() {
  return (
    <Container fluid className='border border-danger mx-auto'>
    <Row sm={1} md={2}>  
    <Row align="center" className='gap-1 my-3 mx-auto px-5'>  
    <ProgressBar now={95} />HTML
    <ProgressBar now={95} />CSS
    <ProgressBar now={90} />Javascript
    <ProgressBar now={80} />React
    <ProgressBar now={85} />Bootstrap
    <ProgressBar now={60} />Tailwind CSS
    <ProgressBar now={61} />MongoDB
    <ProgressBar now={60} />ExpressJS
    <ProgressBar now={65} />NodeJS
    </Row>
    <Row>

    </Row>
    </Row>
    </Container>
  )
}

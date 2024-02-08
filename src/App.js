import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Form} from 'react-bootstrap';
import NavBarComponent from './Component/NavBar';
import FooterPage from './Component/Footer';
import ProgressiveBar from './Component/ProgressBar';
import ContactEmer from './Component/Contact';
import OpenAI from 'openai';
import emailPromotionImage from './emailPromotion.png'
import checkOutImage from './checkOutCart.png'
import reviewImage from './reviewPage.png'

export default function App() {

const [getInput, setGetInput] =useState("");
const [response, setResponse] = useState('');
const handleInput = (e) => {

    e.preventDefault();
    setGetInput(e.target.value);

}
const handleSearchSubmit =() => {

}

  return (
    <Container fluid align="center" className='px-5 py-1 bg-light border border-primary-subtle'  bg="primary">
      <Row>
        <NavBarComponent />
      </Row>
    <Row align="center" xs={1} md={3} className='g-1 border border-warning my-1 p-4'>
    <a style={{ textDecoration: 'none' }} href="https://reviewpage2023.web.app/">
      <Col>
       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={reviewImage} />
          <Card.Body>
          <Card.Title>Review Page</Card.Title>
          <Card.Text>
          Spearheaded the design and development of a dynamic business webpage dedicated to showcasing customer reviews
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
      </a>

      <a style={{ textDecoration: 'none' }} href="https://emailpromotionnow.vercel.app/"> <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={emailPromotionImage }  />
      <Card.Body>
        <Card.Title>Email Promotion</Card.Title>
        <Card.Text>
        Led the end-to-end development of a comprehensive promotional business webpage
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>
        </a>

        <a style={{ textDecoration: 'none' }} href="https://checkoutfuture.web.app/"> <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={checkOutImage} />
        <Card.Body>
        <Card.Title>E-commerce Store</Card.Title>
        <Card.Text>
        Developed a single-page checkout website, streamlining the user's journey
        </Card.Text>
        </Card.Body>
        </Card>
        </Col></a>
      </Row>


  <ProgressiveBar/>
  <ContactEmer />
  <FooterPage/>
    </Container>

  );
}
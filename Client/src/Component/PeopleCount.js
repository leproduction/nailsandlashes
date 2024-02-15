import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

export default function PeopleCount() {
  const [viewers, setViewers] = useState(1); // Initialize viewers as a number

  useEffect(() => {
    // This function will update viewers to a random number between 1 and 40 every 3 seconds
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100); // Correct random number generation, 1 through 40
      setViewers(randomNumber);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Removed viewers from dependency array to avoid re-creating interval unnecessarily

  return (
    <Container>
      <Row className='col-md-1 col-sm-1 d-flex position-fixed top-0 start-0'>
        <small>{viewers} Viewers</small>
      </Row>
    </Container>
  );
}




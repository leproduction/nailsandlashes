import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, ProgressBar, Container, Button, Form } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; // Corrected import for loadStripe

const stripePromise = loadStripe('pk_test_12345'); // Use your Stripe publishable key

export default function ProgressiveBar() {
  const products = [
    {
      id: "price_1OaNxnEP2lKACqyoVaNrm6nd",
      name: 'Donation',
      price: '7.99',
      quantity: 1,
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
    }
  ];

  const [cart, setCart] = useState([]);

  // Corrected: Wrap the addToCart call in a function to prevent immediate invocation
  const addToCart = (product) => () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const stripe = await stripePromise;
    if (!cart.length) { // Corrected to check if cart is empty
      console.error('There is nothing in the cart');
      return;
    }
    const { error } = await stripe.redirectToCheckout({ // Corrected method name
      lineItems: cart.map((item) => ({ price: item.id, quantity: item.quantity })),
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });

    if (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container style={{ background: "rgba(189,195,199, 0.3)" }} fluid className='shadow rounded mx-auto d-flex justify-content-center align-items-center py-3'>
      <Elements stripe={stripePromise}>
        {/* Corrected attribute name onSubmit */}
        <Form onSubmit={handleSubmit}>
          <Row align="center" className='mx-auto'>
            <small><h5 className='text-dark text-center mx-0'>Not only your services that you are getting play important role in our charity wish list but also your small action leads to huge change in someone's life. We will donate 5% annual revenue to charity. Please help us achieve the goal.</h5></small>
            <ProgressBar now={79} animated variant='secondary' />
            {/* Corrected onClick handler to use a function that calls addToCart */}
            <Row className='p-1 col-md-1 col-md-1 mx-auto'>
              <Button variant="outline-light" className='text-dark' type="button" onClick={addToCart(products[0])}><i className="bi bi-piggy-bank-fill"></i></Button>
            </Row>
          </Row>
        </Form>
      </Elements>
    </Container>
  );
}

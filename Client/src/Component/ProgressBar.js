import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, ProgressBar, Container, Button, Form } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; // Corrected import for loadStripe

const stripePromise = loadStripe('pk_live_51OAeLXEP2lKACqyo1hvO7XyGRFWIw3lOAcoMdJB2ewHP6yryhhnj7GtkGgh0gCrLKuYUiHZQuzZJbLwJbY8nbogE00dEmKQorC'); // Use your Stripe publishable key

export default function ProgressiveBar() {
  const products = [
    {
      id: "price_1OkAKlEP2lKACqyooY9ARB8y",
      name: 'Donation',
      price: '5.00',
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
            <small><h5 className='text-dark text-center mx-0'>Not only do the services you receive play an important role in our charity campaign "GoiGiup," but your small actions also lead to huge changes in someone's life. Your actions mean a lot to others. Additionally, we will donate 5% of our annual revenue toward charity. Please help us achieve this goal</h5></small>
            <ProgressBar now={79} animated variant='secondary' />
            {/* Corrected onClick handler to use a function that calls addToCart */}
            <Row className='p-1 col-md-1 col-md-1 mx-auto'>
              <Button variant="outline-light" className='text-dark' type="button" href='https://buy.stripe.com/fZe5nI5j17f22GYcMN' onClick={addToCart(products[0])}><i className="bi bi-piggy-bank-fill"></i></Button>
            </Row>
          </Row>
        </Form>
      </Elements>
    </Container>
  );
}

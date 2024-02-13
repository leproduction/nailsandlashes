import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Image,Row } from 'react-bootstrap';

const API_KEY = 'n5IEeHjArbTdhkBz6tp8wdM4L6qACfdp6UZCQ1GxRQlQsvbZbzBVH8rk'; 
const BASE_URL = 'https://api.pexels.com/v1';

const pexelsClient = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: API_KEY }
});

const fetchPhotos = async (query = 'nature', perPage = 16) => {
  try {
    const response = await pexelsClient.get(`/search?query=${query}&per_page=${perPage}`);
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching data from Pexels:', error);
    return [];
  }
};

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const fetchedPhotos = await fetchPhotos('Nails');
      setPhotos(fetchedPhotos);
    };

    loadPhotos();
  }, []);

  return (
<Container fluid className='p-2 shadow d-flex flex-column align-items-center text-center'>
    <Row className='text-dark my-2'>Testimonials</Row>
  {photos.map(photo => (
    <Row key={photo.id}>
      <Col className="mx-auto p-2">
        <Image className='img-fluid' src={photo.src.medium} alt={photo.alt} style={{ minWidth: '100%' }} />
      </Col>
    </Row>
  ))}
</Container>

  );
};

export default Photos;

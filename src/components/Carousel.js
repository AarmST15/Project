import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Carousel.css'

export default function Carousel() {
  return (
    <div>
    {/* <MDBCarousel showIndicators showControls fade>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={1}
      src='./images/carousel-01.jpg'
      alt='...'
    >
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={2}
      src='./images/carousel-02.jpg'
      alt='...'
    >
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={3}
      src='./images/carousel-03.jpg'
      alt='...'
    >
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </MDBCarouselItem>
  </MDBCarousel> */}
  <MDBCarousel  showControls fade>
    <MDBCarouselItem
      className='w-100 carousel-bg'
      itemId={1}
      src='./images/carousel-04.jpg'      
      >
      <div>
      <h5 className='mb-3'>First slide label</h5>
      <p className='mb-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 carousel-bg'
      itemId={2}
      src='./images/carousel-04.jpg'      
    >
      <h5 className='mb-3'>Second slide label</h5>
      <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 carousel-bg'
      itemId={3}
      src='./images/carousel-04.jpg'      
    >
      <h5 className='mb-3'>Third slide label</h5>
      <p className='mb-3'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </MDBCarouselItem>
  </MDBCarousel>
</div>
  );
}
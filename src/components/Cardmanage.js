import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import { CardActionArea } from '@mui/material';

export default function Cardmanage() {
  return (
    <MDBCardGroup>
    
      <MDBCard> 
        <CardActionArea href='/orderhis'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Order History</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardFooter>
        </MDBCardBody>
        </CardActionArea>
      </MDBCard>
      

      <MDBCard>
      <CardActionArea href='/bill'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Bill</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardFooter>
        </MDBCardBody>
        </CardActionArea>
      </MDBCard>

      <MDBCard>
      <CardActionArea href='/stateday'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Statement</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </MDBCardText>
          <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardFooter>
        </MDBCardBody>
        </CardActionArea>
      </MDBCard>
    </MDBCardGroup>
  );
}
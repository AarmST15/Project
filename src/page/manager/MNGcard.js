import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


export default function MNGcard() {
  return (
    //card 1-3
    <>
    
    <MDBRow className='row-cols-1 row-cols-md-3 g-5 card-mng'>
    
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/setting.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Setting</MDBCardTitle>
            <MDBCardText>
              ...
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter background='transparent' border='light'>
            <MDBBtn href='/setting'>Go somewhere</MDBBtn>                  
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>

      <MDBCol> 
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/Order.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Orders</MDBCardTitle>
            <MDBCardText>...</MDBCardText>
          </MDBCardBody>
            <MDBCardFooter background='transparent' border='light'>
            
            <MDBBtn href='/order'>Go somewhere</MDBBtn>

            </MDBCardFooter>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/statement.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Statement</MDBCardTitle>
            <MDBCardText>
             ...
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter background='transparent' border='light'>
            <MDBBtn href='/statement'>Go somewhere</MDBBtn>
            </MDBCardFooter>
        </MDBCard>
      </MDBCol>     
    </MDBRow>
    
    
    </>
  );
}
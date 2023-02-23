import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Bodyhome.css'

export default function Bodyhome() {
  return (    
    <MDBRow className='grid-stye'>
      <MDBCol md='4' className='img-stye'>
        <img class="overflow-hidden" src='./images/Bodyhome-2.jpg'/>
      </MDBCol>
      <MDBCol md='8' className='text-stye'>
        <h4>Drink it and enjoy it.</h4>
        First I drink the coffee. Then I do the things       
      </MDBCol>
    </MDBRow>   

  );
}
import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css'


export default function Header() {
  
  return (
    <header className='header-stye'>      
      <div className='p-5 text-center bg-image bg-header'>
        <div className='mask' style={{ backgroundColor: 'rgba(255, 150, 80, 0.5)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>POS</h1>
              <h4 className='mb-3'>Cafe manatement system</h4>
              <MDBBtn tag="a" outline size="lg">
                readmore
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>

);
}
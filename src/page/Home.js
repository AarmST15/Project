import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Home.css'

export default function Home() {
  
  return (
    <header className='home'>      
      <div
        className='p-5 text-center bg-image bg-header'
        
      >
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
      <div className='app-grid'>
            <img src='/images/cafe-small-01.jpg'/>
            <div className='app-in-grid'>
              <h1>Enjoy</h1>
              dklnbdfnknfbknbjkf;nab;fnbdfbnflknbcbjfbfnbkfndbkndfbndfknbkdjfndfknbslfjn
            </div>
            <div>
              <h2>Open</h2>
              <h4>Sun - Fri</h4>
              11 : 00 - 22 : 00
            </div>
        </div>
    </header>

  );
}








/*import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <header className='app-header'>
          
           <h2>Home</h2>
          
        </header>
        <div className='app-grid'>
            <img src='/images/cafe-small-01.jpg'/>
            <div className='app-in-grid'>
              <h1>Enjoy</h1>
              dklnbdfnknfbknbjkf;nab;fnbdfbnflknbcbjfbfnbkfndbkndfbndfknbkdjfndfknbslfjn
            </div>
            <div>
              <h2>Open</h2>
              <h4>Sun - Fri</h4>
              11 : 00 - 22 : 00
            </div>
        </div>
                
    </div>
  )
}

export default Home*/
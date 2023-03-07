import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../page/Home';
import Onlineorders from '../page/Onlineorders';
import Contact from '../page/Contact';
import Login from '../page/Login';
import MNGhome from '../page/manager/MNGhome'
import MNGsetting from '../page/manager/MNGsetting';
import MNGorder from '../page/manager/MNGorder';
import MNGstatement from '../page/manager/MNGstatement';
import MNGorderhistory from '../page/manager/MNGorderhistory';
import MNGbill from '../page/manager/MNGbill';
import MNGstateday from '../page/manager/MNGstateday';
import Profile from '../page/Profile'

export default function App() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false); 

  return (
    <>  
    <BrowserRouter>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>POS</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/onlineorders'>Online orders</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/about'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/profile'>test</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
        <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/onlineorders" element={<Onlineorders/>}/>
                <Route path = "/about" element={<Contact/>}/>
                <Route path = "/login" element={<Login/>}/> 
                <Route path = "/mnghome" element={<MNGhome/>}/> 
                <Route path = "/setting" element={<MNGsetting/>}/> 
                <Route path = "/order" element={<MNGorder/>}/>
                <Route path = "/statement" element={<MNGstatement/>}/>
                <Route path = "/orderhis" element={<MNGorderhistory/>}/>
                <Route path = "/bill" element={<MNGbill/>}/>
                <Route path = "/stateday" element={<MNGstateday/>}/>
                <Route path = "/profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>

      
    </>
  );
}
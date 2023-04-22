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


export default function NavbarC() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false); 
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>  
    
        <MDBNavbar expand='lg' light style={{background:"#AACB73",
                    top: "0", 
                    
                    zIndex:'2'}}>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/home'>
                    <img class="overflow-hidden" style={{height:"40px" ,width:"52px" }} src='./images/logo-3.png'/>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavColorSecond(!showNavColorSecond)}>
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>

                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='active'>

                            <MDBNavbarLink aria-current='page' href='/home'>
                                Home
                            </MDBNavbarLink>

                        </MDBNavbarItem>
                        <MDBNavbarItem>

                            <MDBNavbarLink href='/onlineorders'>Online orders</MDBNavbarLink>

                        </MDBNavbarItem>
                        
                        {isLoggedIn ? (
                            <>
                                <MDBNavbarItem>                                
                                <MDBNavbarLink href='/profile'>{user.name}</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                <MDBNavbarLink href='/'>Logout</MDBNavbarLink>
                                </MDBNavbarItem>
                            </>
                            ) : (
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
                                </MDBNavbarItem>
                               
                        )}
                        <MDBNavbarItem>                                
                                <MDBNavbarLink href='/profile'>Profile</MDBNavbarLink>
                        </MDBNavbarItem>
                        
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        

      
    </>
  );

}
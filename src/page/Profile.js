import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NavbarC from '../components/NavbarC'
import Footer from '../components/Footer'

import './Profile.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.0)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Profile() {
  return (
    <div style={{ backgroundColor: '#f4f5f7' }}>

        <NavbarC/>

            <section className="vh-1000" style={{ backgroundColor: '#f4f5f7' }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="8" className="mb-4 mb-lg-0">
                            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                <MDBRow className="g-0">
                                    <MDBCol md="4" className="gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' , paddingBottom:'15px'}}>
                                        <MDBCardImage src="./images/profile.jpg"
                                            alt="Avatar" className="my-5" style={{ width: '80px',borderRadius:"50%" }} fluid />
                                        <MDBTypography tag="h5" >Username</MDBTypography>
                                    
                                    </MDBCol>
                                        
                                    <MDBCol md="8">
                                        <Box sx={{ flexGrow: 1 }} style={{margin:"35px"}}>
                                            <MDBTypography tag="h6">Information</MDBTypography>
                                            <hr className="mt-0 mb-" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="12" className="mb-3">
                                                    <MDBTypography tag="h6">Email</MDBTypography>
                                                    <MDBCardText className="text-muted">info@example.com</MDBCardText>
                                                </MDBCol>
                                            
                                            </MDBRow>

                                            <MDBTypography tag="h6">Point</MDBTypography>
                                            <hr className="mt-0 mb-4" />                    
                                            <MDBTypography tag="h6">16235</MDBTypography>
                                            <MDBCardText className="text-muted">How to use point.</MDBCardText>  
                                        </Box>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        <Footer/>
    </div>
  );
}
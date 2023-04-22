import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NavbarC from '../components/NavbarC'
import Footer from '../components/Footer'
import { ReactSession } from 'react-client-session';
import './Profile.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [customerList, setCustomerList] = useState([]);
  
    useEffect(() => {
      const username = ReactSession.get("username");
      getcustomer(username);
    }, []);
  
    const getcustomer = (username) => {
      if (username == null) {
        window.location.href = "/login";
      } else {
        Axios.get(`http://localhost:3111/profile?username=${username}`)
          .then((response) => {
            setCustomerList(response.data);
            console.log(setCustomerList);
          });
      }
    };
    return (
        <div style={{ backgroundColor: '#f4f5f7' }}>
            <NavbarC />
            <section className="vh-1000" style={{ backgroundColor: '#f4f5f7' }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="8" className="mb-4 mb-lg-0">
                            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                <MDBRow className="g-0">
                                    <MDBCol
                                        md="4"
                                        className="gradient-custom text-center text-white"
                                        style={{
                                            borderTopLeftRadius: '.5rem',
                                            borderBottomLeftRadius: '.5rem',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <MDBCardImage
                                            src="./images/profile.jpg"
                                            alt="Avatar"
                                            className="my-5"
                                            style={{ width: '80px', borderRadius: '50%' }}
                                            fluid
                                        />
                                        <MDBTypography tag="h5"></MDBTypography>
                                    </MDBCol>

                                    <MDBCol md="8">
                                        <Box sx={{ flexGrow: 1 }} style={{ margin: '35px' }}>
                                            <MDBTypography tag="h6">Information : {customerList.username}</MDBTypography>
                                            <hr className="mt-0 mb-" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="12" className="mb-3">
                                                    <MDBTypography tag="h6">
                                                        Email : {customerList.email}
                                                    </MDBTypography>
                                                    <MDBCardText className="text-muted"></MDBCardText>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBTypography tag="h6">
                                                Point : {customerList.point}
                                            </MDBTypography><hr className="mt-0 mb-3" />
                                            <MDBTypography tag="h6">About Me</MDBTypography>
                                            <hr className="mt-0 mb-" />
                                            <MDBCardText className="text-muted">
                                            </MDBCardText>
                                        </Box>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    );
  }
   

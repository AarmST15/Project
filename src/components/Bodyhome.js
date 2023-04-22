import React from 'react';
import { MDBContainer,MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './Bodyhome.css'

export default function Bodyhome() {
  return (    
    <div>
    
        {/* <MDBRow >
            <MDBCol xs='4' md='4' className='img-stye'>
                <img class="overflow-hidden" style={{height:"220px" ,width:"400px" }} src='./images/Bodyhome-4.jpg'/>
            </MDBCol>
            <MDBCol xs='8' md='8' className='text-stye'>
                <h4>Drink it and enjoy it.</h4>
                First I drink the coffee. Then I do the things       
            </MDBCol>
        </MDBRow> */}
        <Grid container spacing={2} justifyContent="center"  alignItems="center"  marginBottom="15px">
            <Grid item md="4" xs="auto" >
                <img class="overflow-hidden" style={{height:"220px" ,width:"400px" }} src='./images/Bodyhome-4.jpg'/>
            </Grid>
            <Grid item xs="auto" md="8" >
            <h4>Drink it and enjoy it.</h4>
                First I drink the coffee. Then I do the things                
                     
            </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginBottom="15px">
        <Grid item md="4" xs="auto" >
            <img class="overflow-hidden" style={{height:"220px" ,width:"400px" }} src='./images/Bodyhome-4.jpg'/>
            </Grid>
            <Grid item xs="auto" md="8" >
            <h4>Drink it and enjoy it.</h4>
                First I drink the coffee. Then I do the things  
            </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginBottom="15px">
        <Grid item md="4" xs="auto" >
            <img class="overflow-hidden" style={{height:"220px" ,width:"400px" }} src='./images/Bodyhome-4.jpg'/>
            </Grid>
            <Grid item xs="auto" md="8" >
            <h4>Drink it and enjoy it.</h4>
                First I drink the coffee. Then I do the things  
                </Grid>
        </Grid>
    
    
   




      </div> 

  );
}
import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Firstpage.css'

function Firstpage() {
  return (
    <div className='fristpage-bg'>        
        
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box sx={{height: '50vh' }} />
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Button variant="contained"  href='/home' style={{background:"#F8CBA6"}}>
                Guest
            </Button>                   
            </Grid>
            <Grid item xs={12} md={6}>
            <Button variant="contained" href='/login'  style={{background:"#F8CBA6"}}>
                Login / Register
            </Button>                                                  
            </Grid>
        </Grid>
            <Box sx={{height: '50vh' }} />
          </Container>
        </React.Fragment>

    </div>
  )
}

export default Firstpage
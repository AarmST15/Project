import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Firstpage.css'

function Firstpage() {
  return (
    <div className='fristpage-bg'>        
        
        <React.Fragment>
            <CssBaseline />
                <Container fixed>
                    <Box sx={{height: '100vh' ,paddingTop:'10vh'}} >
                        <img class="overflow-hidden" style={{height:"300px" ,width:"300px" , marginBottom:"7vh"}} src='./images/logo-2.png'/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ maxWidth: 500, background:"rgb(255, 231, 204)" , marginBottom:"15px" ,borderRadius:'5rem',}}>
                                    <CardActionArea href='/home'>
                                        <CardContent>
                                           <h4>Guest </h4>                                           
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                               
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ maxWidth: 500, background:"rgb(255, 231, 204)" , marginBottom:"15px",borderRadius:'5rem' }}>
                                    <CardActionArea href='/login'>
                                        <CardContent> 
                                        <h4>Login / Register</h4>                                            
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                                                                 
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
        </React.Fragment>

    </div>
  )
}

export default Firstpage
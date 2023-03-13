import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Menuselect from '../components/Menuselect'
import CustomizedBadges from '../components/Badge';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';

import './Contact.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.0)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <div className='contact-page'>
    <Box sx={{ flexGrow: 1 }} style={{margin:"15px"}}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
          <img class="overflow-hidden" style={{borderRadius:"2%" ,height:"250px" ,width:"250px" }} src='./images/Bodyhome-2.jpg'/>
        </Grid>
        <Grid item xs={8} md={8} >
          	<Item style={{height:"250px", background:"#C09A51"}}>
			<h4>Drink it and enjoy it.</h4>
        		First I drink the coffee. Then I do the things
			</Item>
        </Grid>
        <Grid item xs={7} md={7}>
          <Item><Menuselect/></Item>
        </Grid>
        <Grid item xs={5} md={5}>
          <Item><CustomizedBadges/></Item>
        </Grid>
      </Grid>
    </Box>

    <React.Fragment>
          <CssBaseline /> 
            <Container fixed style={{margin:"15px"}}>
              {/* <Box sx={{ background:'red',
              height: '100vh' }} >
                
              </Box> */}
              <MDBRow className='row-cols-1 row-cols-md-2 g-2'>
              <MDBCol >
                <Card sx={{ maxWidth: 500, borderBottomRightRadius: '5rem',borderTopRightRadius: '5rem',background:"#F7C873" ,display:"center"  }}>
                    <CardActionArea data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={8} md={9}>
                                    <Typography gutterBottom variant="h6" component="div" style={{display:"flex" }}>
                                        Espresso
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" display="flex" >
                                        I’m a dish description.
                                    </Typography>
                                    <Typography variant="body2" display = "flex" justifyContent= "flex-end">
                                        50 $
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={3}>
                                    <CardMedia 
                                    style={{ width: '90px',borderRadius:"50%" ,display:"inline" }}
                                    component="img"                                
                                    image="./images/coffee-01.jpg"
                                    alt="coffee"/>                                
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </MDBCol>
            <MDBCol>
                <Card sx={{ maxWidth: 500, borderBottomRightRadius: '5rem',borderTopRightRadius: '5rem',background:"#F7C873"   }}>
                    <CardActionArea data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                        <CardContent >
                            <Grid container spacing={2}>
                                <Grid item xs={8} md={9}>
                                    <Typography gutterBottom variant="h6" component="div" style={{display:"flex" }}>
                                        Late
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" display="flex" >
                                        I’m a dish description.
                                    </Typography>
                                    <Typography variant="body2"  display = "flex" justifyContent= "flex-end">
                                        55 $
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={3}>
                                    <CardMedia 
                                    style={{ width: '90px',borderRadius:"50%" ,display:"inline" }}
                                    component="img"                                
                                    image="./images/coffee-03.jpg"
                                    alt="coffee"/>                                
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </MDBCol>
            </MDBRow>
              

          </Container>
        </React.Fragment>




    </div>
  );
}
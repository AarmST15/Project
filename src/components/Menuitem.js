import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './Menuitem.css'

import { borderRadius } from '@mui/system';


export default function ActionAreaCard(props) {
  const { coffee, onCoffeeClick }= props;

  const [centralModal, setBasicModal] = useState(false);


  // function handleClick(status){
  //   setBasicModal(status);

  //   return centralModal;
  // }
  
  return (
    <div className='card-item'>
        <h3>Recoment Menu</h3>
            
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
                        <CardContent>
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
            {/* <MDBCol>
                <Card sx={{ maxWidth: 175 }}>
                <CardActionArea data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                    <CardMedia
                    component="img"
                    height="175"
                    image="./images/coffee-03.jpg"
                    alt="coffee"
                    />
                    <CardContent
                    >
                    <Typography gutterBottom variant="h5" component="div">
                        Espresso
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    65 $
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    65 $
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </MDBCol>
            <MDBCol>
                <Card sx={{ maxWidth: 175 }}>
                <CardActionArea data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                    <CardMedia
                    component="img"
                    height="175"
                    image="./images/coffee-04.jpg"
                    alt="coffee"
                    />
                    <CardContent
                    >
                    <Typography gutterBottom variant="h5" component="div">
                        Espresso
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    40 $
                    </Typography>
                    </CardContent>
                </CardActionArea>    
                </Card>
            </MDBCol> */}
        </MDBRow>

        


    {/* popup */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Menu Name</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

              <MDBRow>                    
                        <Grid container spacing={1}>
                            <Grid item xs={4} md={4}>
                                <img classname ="img-modal" style={{borderRadius:"50%" , height:"100px" ,width:"100px " }} src = './images/coffee-01.jpg' />
                            </Grid>
                            <Grid item xs={8} md={8} > 
                                <MDBRow>
                                    <Grid item xs={12} md={12} className='text-modal'>
                                        50 $
                                    </Grid>
                                </MDBRow>
                                    <div className='col-form-label , text-modal' style={{fontSize:"small"}}>  
                                    I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                                    </div>
                            </Grid>
                            
                            
                        </Grid>
                    
                </MDBRow>             

                
                <label for="recipient-name" class="col-form-label">Choose according to your needs:</label>
                    
                <MDBRow className='row-cols-1 row-cols-md-3'>                    
                        <Grid container spacing={3}>
                            <Grid item xs={4} md={4}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Typemenu" id="Typemenu1"/>
                                    <label class="form-check-label" for="Typemenu1">
                                        Hot
                                    </label>
                                </div>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Typemenu" id="Typemenu2" checked/>
                                    <label class="form-check-label" for="Typemenu2">
                                        Cold
                                </label>
                                </div>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Typemenu" id="Typemenu3"/>
                                    <label class="form-check-label" for="Typemenu3">
                                        Frape
                                    </label>
                                </div>
                            </Grid>
                        </Grid>
                    
                </MDBRow>

                    <label for="recipient-name" class="col-form-label">Choose coffeeshot to your needs:</label>

                <MDBRow className='row-cols-1 row-cols-md-3'>
                    <Grid container spacing={3}>
                        <Grid item xs={4} md={4}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Addshort" id="Addshort1"/>
                                <label class="form-check-label" for="Addshort1">
                                    1 shot
                                </label>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4}>    
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Addshort" id="Addshort2" checked/>
                                <label class="form-check-label" for="Addshort2">
                                    2 shot
                            </label>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Addshort" id="Addshort3"/>
                                <label class="form-check-label" for="Addshort3">
                                    3 shot
                                </label>
                            </div>
                        </Grid>
                    </Grid>
                </MDBRow>
                    <label for="recipient-name" class="col-form-label">Choose sweetlevel to your needs:</label>
                <MDBRow className='row-cols-1 row-cols-md-3 '>
                    <Grid container spacing={3}>
                        <Grid item xs={4} md={4}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Sweetlevel" id="Sweetlevel1"/>
                                <label class="form-check-label" for="Sweetlevel1">
                                    25%
                                </label>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Sweetlevel" id="Sweetlevel2" checked/>
                                <label class="form-check-label" for="Sweetlevel2">
                                    50%
                            </label>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Sweetlevel" id="Sweetlevel3"/>
                                <label class="form-check-label" for="Sweetlevel3">
                                    100%
                                </label>
                            </div>
                        </Grid>
                    </Grid>
                </MDBRow>

                <form>
                    <div class="form-group">
                    <label for="message-text" class="col-form-label" style={{display:"flex" }} >Special Requests:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>                    
                </form>
              </div>
              <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Send to cart</button>
              </div>
            </div>
          </div> 
        </div>
    </div>
    
  );
}

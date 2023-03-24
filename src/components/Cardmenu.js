import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Grid from '@mui/material/Grid';
import Numberinde from '../components/Numberinde'

function Cardmenu(props) {
    const {coffee} = props;

  return (
    <div>
        
            <MDBCol >
                <Card sx={{ maxWidth: 500, borderBottomRightRadius: '5rem',borderTopRightRadius: '5rem',background:"#FFFBEB" ,display:"center"  }}>
                    <CardActionArea data-toggle="modal" data-target="#exampleModal" >
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={8} md={9}>
                                    <Typography gutterBottom variant="h6" component="div" style={{display:"flex" }}>
                                        {coffee.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" display="flex" >
                                        {coffee.detail}
                                    </Typography>
                                    <Typography variant="body2" display = "flex" justifyContent= "flex-end">
                                        {coffee.price}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={3}>
                                    <CardMedia 
                                    style={{ width: '90px',borderRadius:"50%" ,display:"inline" }}
                                    component="img"                                
                                    image={coffee.thumbnailUrl}
                                    alt="coffee"/>                                
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </MDBCol> 
            
            {/* popup */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{coffee.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <MDBRow>                    
                            <Grid container spacing={1}>
                                <Grid item xs={4} md={4}>
                                    <img classname ="img-modal" style={{borderRadius:"50%" , height:"100px" ,width:"100px " }} src = {coffee.thumbnailUrl} />
                                </Grid>
                                <Grid item xs={8} md={8} > 
                                    <MDBRow>
                                        <Grid item xs={12} md={12} className='text-modal'>
                                            {coffee.price}
                                        </Grid>
                                    </MDBRow>
                                        <div className='col-form-label , text-modal' style={{fontSize:"small"}}>  
                                            {coffee.fullDetail}
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
                        
                           

                        <form>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label" style={{display:"flex" }} >Special Requests:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>  
                        </form>
                        <Numberinde/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Send to cart</button>
                    </div>
                </div>
            </div> 
        </div>         
           
        
        
    </div>
  )
}

export default Cardmenu
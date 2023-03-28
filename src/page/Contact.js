import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

function Contact() {
    const price = 10; // Replace 10 with your actual price value
    const quantity = 2; // Replace 2 with your actual quantity value
    const Totalprice = price * quantity;

  return (
    <div>
      Contact
      <Card sx={{ maxWidth: 500, background:"#FFFBEB" ,display:"center", marginBottom:"15px" }}>
                    <CardActionArea data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                        <CardContent>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            <Grid container spacing={2}>
                                <Grid item xs={8} md={9}>
                                    <Typography gutterBottom variant="h6" component="div" style={{display:"flex" }}>
                                        #menuname
                                    </Typography>
                                    
                                    <Typography variant="body2" color="text.secondary" style={{display:"flex"  ,paddingTop:"10px"}}>
                                        #detail
                                    </Typography>
                                    
                                </Grid>

                                <Grid item xs={4} md={3}>
                                <Typography variant="body1" display = "flex" justifyContent= "flex-end">
                                        {price}
                                </Typography>
                                <Typography variant="body2" display = "flex" justifyContent= "flex-end" paddingTop="25px">
                                        {quantity}
                                </Typography>
                                                               
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
                      
                <Grid container spacing={2}>
                                <Grid item xs={8} md={9}>
                                    <Typography gutterBottom variant="h8" component="div" style={{display:"flex" }}>
                                        Total
                                    </Typography>
                                   
                                    
                                </Grid>
                                <Grid item xs={4} md={3}>
                                  <Typography variant="body1" display = "flex" justifyContent= "flex-end" style={{marginRight:'15px' }}>
                                        {Totalprice}
                                    </Typography>                               
                                </Grid>
                            </Grid>
      
      
    </div>
  )
}

export default Contact
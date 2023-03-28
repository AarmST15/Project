import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Grid from '@mui/material/Grid';
import Numberinde from '../components/Numberinde'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import React, { Component , useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './Numberinde.css'
import Radiomenu from './Radiomenu';



function Cardmenu(props) {
    const {coffee} = props;
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [price, setPrice] = useState(50); // ราคาเริ่มต้น
  
  
  

  return (
    <div>
        
            <MDBCol >
                <Card sx={{ maxWidth: 500, borderBottomRightRadius: '5rem',borderTopRightRadius: '5rem',background:"#FFFBEB" ,display:"center" , margin:'5px' }}>
                    <CardActionArea onClick={handleOpen}>
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
                                        {/* {coffee.price} */} 
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
            <div>      
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{coffee.title}</DialogTitle>
                    <DialogContent>                        
                            <MDBRow>                    
                                <Grid container spacing={1}>
                                    <Grid item xs={4} md={4}>
                                        <img classname ="img-modal" style={{borderRadius:"50%" , height:"100px" ,width:"100px " ,align:'center'}} src = {coffee.thumbnailUrl} />
                                    </Grid>
                                    <Grid item xs={8} md={8} > 
                                        <MDBRow>
                                            <Grid item xs={12} md={12} className='text-modal'>
                                                <h5>{coffee.price}</h5>
                                            </Grid>
                                        </MDBRow>
                                            <div className='col-form-label , text-modal' style={{fontSize:"small"}}>  
                                                {coffee.fullDetail}
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
                        
                        <h5>Tolal  </h5> 
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Send to cart</Button>
                    </DialogActions>
                </Dialog>
            </div>
                 
           
        
        
    </div>
  )
}

export default Cardmenu
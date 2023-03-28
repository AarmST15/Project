import { MDBBadge } from 'mdb-react-ui-kit';
import * as React from 'react';
import { useState } from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";


import './Badge.css'
import Tabelpayment from './Tabelpayment';
import Steppayment from './Steppaymennt';




export default function Badge() {
    const [state, setState] = React.useState({   
        right: false
      });
    
    const toggleDrawer = (side, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

      
    const [open, setOpen] = useState(false);
      
    const handleOpen = () => {
        setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };
    
    const price = 10; // Replace 10 with your actual price value
    const quantity = 2; // Replace 2 with your actual quantity value
    const Totalprice = price * quantity;

    const list = (side) => (
        <Box
            sx={{ width: side === 'top' || side === 'bottom' ? 'auto' : 300 }}
            style={{background:"#ECF9FF"}}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
            >
            
                <h4 style={{marginLeft:'25px' }}>
                    My Order
                </h4>
                <Divider/>
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
                
                <List>
                    <Divider/>    
                <ListItem disablePadding>
                    <ListItemButton 
                      style={{display:"center" ,background:"#F8CBA6"}} onClick={handleOpen}
                    >
                        Submit
                    </ListItemButton>
                </ListItem>
                <Divider/>
            </List>           
            
        </Box> 
        );  

    return (
        <div>    
            
            {['Viwe Cart'].map((side) => (
            <React.Fragment key={side}>
                <Button variant="contained" onClick={toggleDrawer(side, true)} style={{background:"#F8CBA6"}}>
                    {side}
                    <MDBBadge className='ms-2' color='danger' > 1 </MDBBadge>
                </Button>          
                <Drawer
                    side={side}
                    open={state[side]}
                    onClose={toggleDrawer(side, false)}
                    >
                    {list(side)}
                </Drawer>
            </React.Fragment>
        ))}

        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Payment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Steppayment/>                            
                        </DialogContentText>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>

            {/* <div class="modal fade" id="GenQrcode" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Qrcode</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">              
                <Tabelpayment/>
                    
                </div>
                <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div> 
            </div> */}


    </div>
  );
}
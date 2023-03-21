import { MDBBadge, MDBBtn,MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

import './Badge.css'
import { positions } from '@mui/system';

// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
// }
//     function closeNav() {
//     document.getElementById("mySidenav").style.width = "0" ;
// }

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
    
      const list = (side) => (
        <Box
          sx={{ width: side === 'top' || side === 'bottom' ? 'auto' : 300 }}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          >
            
                <h4>
                    My Order
                </h4>
                <Divider/>
                <Card sx={{ maxWidth: 500, borderRadius: '1rem',background:"#EEEEEE" ,display:"center", margin:"5px" }}>
                    <CardActionArea data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={8} md={9}>
                                    <Typography gutterBottom variant="h6" component="div" style={{display:"flex" }}>
                                        #menuname
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" display="flex" >
                                      <Grid container spacing={2}>
                                      <Grid item xs={4} md={3}>
                                        #type
                                      </Grid>
                                      <Grid item xs={4} md={3}>
                                        #sweet    
                                      </Grid> 
                                      <Grid item xs={4} md={3}>
                                        #short
                                      </Grid>  
                                      </Grid>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{display:"flex" }}>
                                        #detail
                                    </Typography>
                                    
                                </Grid>
                                <Grid item xs={4} md={3}>
                                <Typography variant="body1" display = "flex" justifyContent= "flex-end">
                                        #price
                                </Typography>
                                <Grid item xs={12} md={12}>
                                <Typography variant="body2" display = "flex" justifyContent= "flex-end" paddingTop="35px">
                                        #quantity
                                </Typography>
                                        
                                </Grid>                                
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
                                  <Typography variant="body1" display = "flex" justifyContent= "flex-end">
                                        0 
                                    </Typography>                               
                                </Grid>
                            </Grid>
                
                <List>
                    <Divider/>    
                <ListItem disablePadding>
                    <ListItemButton 
                      style={{positions:"center"}} 
                      data-toggle="modal" data-target="#GenQrcode" data-whatever="@mdo"
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
            <Button variant="contained" onClick={toggleDrawer(side, true)}>
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
      <div class="modal fade" id="GenQrcode" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Payment</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">              

                
              </div>
              <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div> 
        </div>


    </div>
  );
}
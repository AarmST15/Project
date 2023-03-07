//import React from 'react';
import { MDBBadge, MDBBtn,MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

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
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                        
                        <th scope='col'>List</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Total</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>                 

                        <MDBRow>
                            <MDBCol md='3'>
                            Subtotal
                            </MDBCol>
                            <MDBCol md='3'>
                                100 $
                            </MDBCol>
                        </MDBRow>                
                
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
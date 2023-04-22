import { MDBBadge } from 'mdb-react-ui-kit';
import * as React from 'react';
import { useState,useEffect } from "react"
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Badge.css'
import Tabelpayment from './Tabelpayment';
import Steppayment from './Steppaymennt';
import Axios from 'axios';



export default function Badge({refresh,setRefresh}) {
const [POList, setPOList] = useState([]);
const [oderList, setOderList] = useState([]);
const [num_table, setNum_table] = useState(0);


    useEffect(() => {
        if(refresh == true)
        Axios.get('http://localhost:3111/getPO')
            .then(response => {
                setPOList(response.data);
                setRefresh(false);
            })
             }, [refresh]);
    

    //   const addOrder = () => {
    //     Axios.post("http://localhost:3111/createOrder", {
    //       id_po: id_po,
    //       num_table: num_table,
    //       total : total,
    //     }).then(() => {
    //         setOderList([
    //         ...oderList,
    //         {
    //             id_po: id_po,
    //             num_table: num_table,
    //             total : total,
    //         },
    //       ]);
    //     });
    //   };

    
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
    const [open2, setOpen2] = useState(false);

    const handleOpen2 = () => {
        setOpen(false);
        setOpen2(true);
      };
    const handleOpen = () => {
        setOpen(true);
        
    };
      
    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
    };
    
    const price = 10; // Replace 10 with your actual price value
    const unit = 2; // Replace 2 with your actual unit value
    const Totalprice = price * unit;

    const [table, setTable] = useState([]);

    const handleChange = (event) => {
      setTable(event.target.value);
      setNum_table(event.target.value);
    };

    const list = (side) => (
        <Box
            sx={{ width: side === 'top' || side === 'bottom' ? 'auto' : 300 }}
            style={{background:"#FFD4D4"}}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
            >
            
                <h4 style={{textAlign:'center'}}>
                    My Order
                </h4>
                <Divider/>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>

                            <Typography gutterBottom variant="h6" component="div" style={{display:"flex", padding:'10px' }}>
                                NO.Teble 
                            </Typography>
                            </Grid> 
                            <Grid item xs={6} md={6}>
                            <div style={{margin:'5px'}}>
                                <Box sx={{ maxWidth: 200 , maxHeight: 90}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">No.</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={table}
                                        label="Type"
                                        onChange={handleChange}                                        
                                        >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            {/* <Typography variant="body1" color="text.secondary" style={{ textAlign:'end' ,padding:'15px'}}>
                                x
                            </Typography> */}
                                    
                        </Grid>
                    </Grid>
                {POList.map(po =>(                
                    <Card sx={{ maxWidth: 500, background:"#FFFFE8" ,display:"center", marginBottom:"15px" }}>
                        <CardActionArea data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                            <CardContent>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleOpen2}>
                                <span aria-hidden="true">&times;</span>
                                </button>
                                <Grid container spacing={2}>
                                    <Grid item xs={8} md={9}>
                                        <Typography gutterBottom variant="h6" component="div" style={{display:"flex" }}>
                                            {po.id_menu}
                                        </Typography>
                                        
                                        <Typography variant="body2" color="text.secondary" style={{display:"flex"  ,paddingTop:"10px"}}>
                                            {po.s_req}
                                        </Typography>
                                        
                                    </Grid>

                                    <Grid item xs={4} md={3}>

                                    <Typography variant="body1" display = "flex" justifyContent= "flex-end">
                                        {po.total}
                                    </Typography>
0
                                    <Typography variant="body2" display = "flex" justifyContent= "flex-end" paddingTop="25px">
                                        {po.quanity}
                                    </Typography>
                                                                
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}      
                <Grid container spacing={2}>
                                <Grid item xs={8} md={9}>
                                    <Typography gutterBottom variant="h8" component="div" style={{display:"flex" }}>
                                        Total
                                    </Typography>
                                   
                                    
                                </Grid>
                                <Grid item xs={4} md={3}>
                                  <Typography variant="body1" display = "flex" justifyContent= "flex-end" style={{marginRight:'15px' }}>
                                    </Typography>                               
                                </Grid>
                            </Grid>
                
                <List>
                    <Divider/>    
                <ListItem disablePadding>
                    <ListItemButton 
                      style={{display:"center" ,background:"#CDE990"}} onClick={() => {{handleOpen();}} }
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
                <Button variant="contained" onClick={toggleDrawer(side, true)} style={{background:"#AACB73"}}>
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

        <div>
            <Dialog open={open2} onClose={handleClose}>
                <DialogTitle>Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                                 Are you sure ?                       
                        </DialogContentText>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleClose}>Yes</Button>
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
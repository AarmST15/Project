import React, { useState, useEffect, Component } from 'react';
import './Menuitem.css'
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import './Numberinde.css'
import { ReactSession } from 'react-client-session';


function Menuitem({coffeesList , setRefresh}) {
    const [unit, setUnit] = useState(0);
    const [open, setOpen] = useState(false);
    const [coffee, setCoffee] = useState({});
    

    const [totalprice, setTotalprice] = useState(0);

   
    const handleOpen = (coffee) => {
        setCoffee(coffee);
        setOpen(true);
        setTotalprice(0);
    };

    const handleClose = () => {
        setOpen(false);

        //clear old data

        sets_req("");
        setTotal(0);
    }

    const [total, setTotal] = useState(0);
    // const [id_menu, setIDmenu] = useState(0);
    const [s_req, sets_req] = useState("");
  

    const [poList, setPOList] = useState([]);
    const username = ReactSession.get("username");
    const addOP = (coffee) => {

        const sendData = {
            id_menu: coffee.id_menu,
            s_req: s_req,
            quanity: unit,
            total: totalprice,
            username: username,
        };
        console.log(
            sendData
        );

        Axios.post("http://localhost:3111/createPO", sendData).then(() => {
            console.log("ADD FIN");
            setPOList([
                ...poList,
                sendData
                // {
                //     id_menu: id_menu,
                //     s_req: s_req,
                //     quanity: quanity,
                //     total: total,
                //     username: username,
                // },
            ]);
        });
    };

    
    return (
        <div>
            <div className='card-item'>
                <h3 style={{ marginBottom: '3vh' }}>Menu</h3>
                {/* card menu */}
                <MDBRow className='row-cols-1 row-cols-md-2 g-2'>
                    {coffeesList.map(coffee => (
                        <MDBCol >

                            <Card sx={{ maxWidth: 500, borderBottomRightRadius: '5rem', borderTopRightRadius: '5rem', background: "#FFFFE8", display: "center", margin: '5px' }}>
                                <CardActionArea onClick={() => handleOpen(coffee)}>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={8} md={9}>
                                                <Typography gutterBottom variant="h6" component="div" style={{ display: "flex" }}>
                                                    {coffee.n_menu}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary" textAlign="end" >
                                                    {coffee.details}
                                                </Typography>
                                                <Typography variant="body2" textAlign="end" >
                                                    {coffee.price}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} md={3}>
                                                <CardMedia
                                                    style={{ width: '90px', borderRadius: "50%", display: "inline" }}
                                                    component="img"
                                                    image={coffee.img}
                                                    alt="coffee" />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </MDBCol>
                    ))}
                </MDBRow>
                {/* popup */}
                <div>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                            <MDBRow>
                                <Grid container spacing={1}>
                                    <Grid item xs={4} md={4}>
                                        <div style={{ textAlign: 'start' }}>
                                            {coffee.id_menu}
                                            {/* {console.log(id_menu)} */}
                                        </div>

                                    </Grid>
                                    <Grid item xs={8} md={8} >
                                        <div style={{ textAlign: 'end' }}>{coffee.n_menu}</div>
                                    </Grid>
                                </Grid>
                            </MDBRow>
                        </DialogTitle>
                        <DialogContent>
                            <MDBRow>
                                <Grid container spacing={1}>
                                    <Grid item xs={4} md={4}>
                                        <img classname="img-modal" style={{ borderRadius: "50%", height: "100px", width: "100px ", align: 'center' }} src={coffee.thumbnailUrl} />
                                    </Grid>
                                    <Grid item xs={8} md={8} >
                                        <MDBRow>
                                            <Grid item xs={12} md={12} className='text-modal'>
                                                <h5>{coffee.price}</h5>
                                            </Grid>
                                        </MDBRow>
                                        <div className='col-form-label , text-modal' style={{ fontSize: "small" }}>
                                            {coffee.details}
                                        </div>
                                    </Grid>
                                </Grid>
                            </MDBRow>

                            <form>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label" style={{ display: "flex" }} >Special Requests:</label>
                                    <textarea class="form-control" id="message-text" 
                                    value={s_req} 
                                    onChange={(event) => {
                                        // console.log(event.target.value)
                                        sets_req(event.target.value);
                                    }} ></textarea>
                                </div>
                            </form>
                            <div style={{ textAlign: 'center' }}>
                                <Box>
                                    <Stack direction="row" spacing={2}>
                                        <div onClick={() => {
                                            setUnit(unit + 1);
                                            setTotalprice(coffee.price * (unit + 1))
                                        }}>
                                            <Button variant="outlined">+</Button>
                                        </div>
                                        <div>
                                            <h6 >{unit}</h6>
                                        </div>
                                        <div onClick={() => {
                                            if (unit >= 1)
                                                setUnit(unit - 1);
                                            setTotalprice(coffee.price * (unit - 1))
                                        }}>
                                            <Button variant="outlined">-</Button>
                                        </div>
                                    </Stack>

                                </Box>
                            </div>
                            <Grid container spacing={1}>
                                <Grid item xs={10} md={10}>
                                    <h5 style={{ textAlign: 'end' }} >Total:</h5>
                                </Grid>
                                <Grid item xs={2} md={2}>
                                    <div>
                                        <h5 style={{ textAlign: 'end' }} >{totalprice}</h5>
                                    </div>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => {
                                addOP(coffee);
                                handleClose();
                                setRefresh(true);
                            }}>Send to cart</Button>
                        </DialogActions>
                    </Dialog>

                </div>

            </div>


        </div>
    )
}

export default Menuitem



import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Grid from '@mui/material/Grid';
import { useState, useEffect, Component } from 'react';
import Axios from 'axios';

export default function Product(props) {
    const{onAdd}=props;
    const [coffeesList, setCoffeesList] = useState([]);

    useEffect(() => {
        // ดึงข้อมูลจากฐานข้อมูล
        Axios.get('http://localhost:3111/getMenu')
            .then(response => {
                setCoffeesList(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <MDBRow className='row-cols-1 row-cols-md-2 g-2'>
                    {coffeesList.map(coffee => (
                        <MDBCol >

                            <Card sx={{ maxWidth: 500, borderBottomRightRadius: '5rem', borderTopRightRadius: '5rem', background: "#FFFFE8", display: "center", margin: '5px' }}>
                                <CardActionArea onClick={()=>onAdd(coffeesList)}>
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
                                                    alt= {coffee.n_menu}/>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </MDBCol>
                    ))}
                </MDBRow>
           
            <div>
                <button onClick={()=>onAdd(coffeesList)}>Add to Cart</button>
            </div>
        </div>
    );
}



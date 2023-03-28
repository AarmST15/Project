import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './MNGcard.css'
import Barchart from './Barchart';
import LineChart from './LineChart';
import Topmenu from './Topmenu';
import Tableallsale from './Tableallsale'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display: '',
    color: theme.palette.text.secondary,
}));


export default function MNGcard() {
    return (
        <div className='mng-grid'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4} md={4}>                                    
                                    <img class="overflow-hidden" style={{height:"50px" ,width:"50px"}} src='./images/icon-05.png'/>     
                                </Grid>   
                                <Grid item xs={12} sm={8} md={8}>
                                    <Grid item xs={12} md={12}>
                                        Day revenue
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <h5 className='mng-home-font-color'> ***</h5>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4} md={4}>                                    
                                    <img class="overflow-hidden" style={{height:"50px" ,width:"50px"}} src='./images/icon-02.png'/>     
                                </Grid>   
                                <Grid item xs={12} sm={8} md={8}>
                                    <Grid item xs={12} md={12}>
                                        Earnings
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <h5 className='mng-home-font-color'> ***</h5>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4} md={4}>                                    
                                    <img class="overflow-hidden" style={{height:"50px" ,width:"50px"}} src='./images/icon-03.png'/>     
                                </Grid>   
                                <Grid item xs={12} sm={8} md={8}>
                                    <Grid item xs={12} md={12}>
                                        Weekly revenue
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <h5 className='mng-home-font-color'> ***</h5>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4} md={4}>                                    
                                    <img class="overflow-hidden" style={{height:"50px" ,width:"50px"}} src='./images/icon-04.png'/>     
                                </Grid>   
                                <Grid item xs={12} sm={8} md={8}>
                                    <Grid item xs={12} md={12}>
                                    Member Clients
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <h5 className='mng-home-font-color'> ***</h5>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>

                    
                    <Grid item xs={12} md={8}>
                        <Item>
                            <Barchart/>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>
                           <LineChart/> 
                        </Item>
                    </Grid>
                    <Grid item xs={12}  md={4}>
                        <Item>
                        <Topmenu/>    
                        </Item>
                    </Grid>
                    <Grid item xs={12}  md={8}>
                        <Item>
                            <Tableallsale/>
                        </Item>
                    </Grid>
                    
                </Grid>
            </Box>

        </div>
    );
}
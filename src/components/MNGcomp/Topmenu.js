import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Topmenu.css'

function Topmenu() {
    return (
        <div>
            <h6>Top selling Menus</h6>       
                <div className='top-style'>    
                    <div className='top-style'>
                        <Grid container spacing={2}>
                            <Grid item xs={2} sm={2} md={2}>                                    
                                <img class="overflow-hidden no-png-stlye" src='./images/top-1.png'/>     
                            </Grid> 
                            <Grid item xs={4} sm={4} md={4}>                                    
                                <img class="overflow-hidden topmenu-stlye" src='./images/coffee-01.jpg'/>     
                            </Grid>   
                            <Grid item xs={6} sm={6} md={6}>
                                <Grid item xs={12} md={12}>
                                Espresso cup
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <h6 className='mng-home-font-color '> $ 50</h6>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='top-style'>
                        <Grid container spacing={2}>
                            <Grid item xs={2} sm={2} md={2}>                                    
                                <img class="overflow-hidden no-png-stlye" src='./images/top-2.png'/>     
                            </Grid> 
                            <Grid item xs={4} sm={4} md={4}>                                    
                                <img class="overflow-hidden topmenu-stlye" src='./images/coffee-03.jpg'/>     
                            </Grid>   
                            <Grid item xs={6} sm={6} md={6}>
                                <Grid item xs={12} md={12}>
                                Late art
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <h6 className='mng-home-font-color'> $ 60</h6>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='top-style'>
                        <Grid container spacing={2}>
                            <Grid item xs={2} sm={2} md={2}>                                    
                                <img class="overflow-hidden no-png-stlye" src='./images/top-3.png'/>     
                            </Grid> 
                            <Grid item xs={4} sm={4} md={4}>                                    
                                <img class="overflow-hidden topmenu-stlye" src='./images/coffee-04.jpg'/>     
                            </Grid>   
                            <Grid item xs={6} sm={6} md={6}>
                                <Grid item xs={12} md={12}>
                                Fresh milk
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <h6 className='mng-home-font-color'> $ 45</h6>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>  
        </div>
  )
}

export default Topmenu
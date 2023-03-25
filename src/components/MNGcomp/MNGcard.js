import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './MNGcard.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F6F1F1',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));


export default function MNGcard() {
    return (
        <div className='mng-grid'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Item>
                        <Grid item xs={6} md={4}>
                                                   
                        
                        </Grid>   
                        <Grid item xs={6} md={8}>
                            All Spending                        
                        
                        </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            Earnings
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            Weekly revenue
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            Member Clients
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}
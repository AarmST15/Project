import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Menuselect from '../components/Menuselect'
import CustomizedBadges from '../components/Badge';

import './Contact.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.0)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <div className='contact-page'>
    <Box sx={{ flexGrow: 1 }} style={{margin:"15px"}}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <img class="overflow-hidden" style={{borderRadius:"2%" ,height:"250px" ,width:"250px" }} src='./images/Bodyhome-2.jpg'/>
        </Grid>
        <Grid item xs={6} md={8} >
          	<Item style={{height:"250px", background:"#C09A51"}}>
			<h4>Drink it and enjoy it.</h4>
        		First I drink the coffee. Then I do the things
			</Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item><Menuselect/></Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item><CustomizedBadges/></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
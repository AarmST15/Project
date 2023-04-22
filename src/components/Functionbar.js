import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menuselect from '../components/Menuselect'
import CustomizedBadges from '../components/Badge';
import { useState } from 'react';


export default function FullWidthGrid( { coffeesList,setSerach_coffeesList,refresh,setRefresh} ) {
 
  return (
    
    <Box sx={{ flexGrow: 1 }} style={{margin:"15px"}}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Menuselect
          setSerach_coffeesList={setSerach_coffeesList} 
          coffeesList={coffeesList}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CustomizedBadges refresh={refresh} setRefresh={setRefresh}/>
        </Grid>
      </Grid>
    </Box>
    
  );
}
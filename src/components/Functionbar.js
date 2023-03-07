import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Menuselect from '../components/Menuselect'
import CustomizedBadges from '../components/Badge';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.0)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    
    <Box sx={{ flexGrow: 1 }} style={{margin:"15px"}}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Menuselect/>
        </Grid>
        <Grid item xs={6} md={6}>
          <CustomizedBadges/>
        </Grid>
      </Grid>
    </Box>
    
  );
}
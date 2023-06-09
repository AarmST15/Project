import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tableclients from '../../components/MNGcomp/Tableclients';
import Sidenavbar from '../../components/MNGcomp/Sidenavbar';
import'./MNGclients.css'

function MNGclients() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    display: '',
    color: theme.palette.text.secondary,
}));


  return (
    <div className='mng-clients-bg'>
      <Sidenavbar/>
    <h3 style={{color:'#000',marginBottom:'40px'}}>Clients Table</h3>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                <Item>
                    <Tableclients/>
                    
                </Item>
                </Grid>
            </Grid>
        </Box>        
      </div>

  )
}

export default MNGclients
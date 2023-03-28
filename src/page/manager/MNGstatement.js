import React from 'react'
import'./MNGstatement.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '../../components/MNGcomp/Table'

function MNGstatement() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    display: '',
    color: theme.palette.text.secondary,
}));
  return (
    <div className='mng-state-bg'>
      <h3 style={{color:'#000',marginBottom:'40px'}}>Statement Table</h3>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                <Item>
                    
                    <Table/>
                </Item>
                </Grid>
            </Grid>
        </Box> 
    </div>
  )
}

export default MNGstatement
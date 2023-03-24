import React from 'react'
import Menuitem from '../components/Menuitem'
import './Onlineorders.css'
import Functionbar from '../components/Functionbar'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Onlineorders() {
  
  
  return (
    <div className='order-line'>
      
      <header>
      <div className='p-5 text-center order-head'>
        <h1 className='mb-3'>Online orders</h1>
        <h4 className='mb-3'>#####</h4>
        
      </div>
    </header>
      <div className='order-select-grid'>
          <Functionbar/>
      </div>
      <div className='order-item'>
        <Menuitem/>
      </div>
          <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box sx={{ 
              height: '100vh' }} />
          </Container>
        </React.Fragment>
    </div>
  )
}

export default Onlineorders
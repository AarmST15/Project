import React from 'react';
import './Header.css'
import Button from '@mui/material/Button';


export default function Header() {
  
  return (
    <header className='header-stye'>      
      <div className='p-5 text-center bg-image bg-header'>
        <div className='mask' style={{ backgroundColor: ' rgb(255, 255, 232,0.5)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-dark'>
              
              <h1 className='mb-1 text-header' >POS</h1>
              <h4 className='mb-3 text-header'>Cafe manatement system</h4>
              <Button variant="outlined" href='/onlineorders' style={{ backgroundColor: 'rgb(255, 255, 232, 0.5)' ,color:'#000' ,borderColor:'#000'}}>Online Orders</Button>
            </div>
          </div>
        </div>
      </div>
    </header>

);
}
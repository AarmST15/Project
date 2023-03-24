import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Bodyhome from '../components/Bodyhome'
import Box from '@mui/material/Box';
import NavbarC from '../components/NavbarC'
import Footer from './Footer'

function Home() {
  return (
    
    <div className='home'>
      <NavbarC/>
    
        <header>          
           <Header/>          
        </header>
        <div className='carousel-stye' >         
          <Carousel/>
        </div> 
        <Box sx={{ 
              height: '5vh' }} />
        <div  >         
          <Bodyhome/>
        </div>   
          <div>
              <h2>Open</h2>
              <h4>Sun - Fri</h4>
              11 : 00 - 22 : 00
          </div>
          <Footer/>
    </div>                
    
  )
}

export default Home
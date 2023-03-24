import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Bodyhome from '../components/Bodyhome'
import Box from '@mui/material/Box';


function Home() {
  return (
    <div className='home'>
    
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
          
    </div>                
    
  )
}

export default Home
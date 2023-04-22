import React from 'react'
import Menuitem from '../components/Menuitem'
import './Onlineorders.css'
import Functionbar from '../components/Functionbar'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavbarC from '../components/NavbarC'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Onlineorders() {
  const [serach_coffeesList, setSerach_coffeesList] = useState([]);
  const [coffeesList, setCoffeesList] = useState([]);
  const [refresh,setRefresh] = useState(true);

  useEffect(() => {
    // ดึงข้อมูลจากฐานข้อมูล
    Axios.get('http://localhost:3111/getMenu')
        .then(response => {
          // console.log(response.data)
            setCoffeesList(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}, []);


  return (
    <div className='order-line'>
      <NavbarC/>
      <header>
      <div className='p-5 text-center order-head'>
        <h1 className='mb-3'>Online orders</h1>
        <h6 className='mb-3'>Please choose the menu you want to eat and sit back and do your work and we will serve you.</h6>
        
      </div>
    </header>
      <div className='order-select-grid'>
          <Functionbar coffeesList={coffeesList} setSerach_coffeesList={setSerach_coffeesList} refresh={refresh} setRefresh={setRefresh}/>
      </div>
      <div className='order-item'>
        <Menuitem coffeesList={serach_coffeesList} setRefresh={setRefresh}/>
      </div>
          <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box sx={{ 
              height: '10vh' }} />
          </Container>
        </React.Fragment>

        <Footer/>
    </div>
  )
}

export default Onlineorders
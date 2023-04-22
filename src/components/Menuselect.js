import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Axios } from 'axios';
import { useState, useEffect } from "react";
import { Category } from '@mui/icons-material';

export default function Menuselect( {coffeesList,setSerach_coffeesList}) {
  const [type, setType] = useState('');
  
   useEffect(() => {
     setSerach_coffeesList(coffeesList);
  }, [coffeesList, setSerach_coffeesList]);
  
  const handleChange = (event) => {
    
    if (event.target.value === 'all') {
      setSerach_coffeesList(coffeesList);
    } else {
      const showlist = coffeesList.filter(coffee => coffee.type === event.target.value);
      setSerach_coffeesList(showlist);
    }    
    
  };
 
  
  return (
    
    <div >
    
    <Box sx={{ maxWidth: 200 , maxHeight: 90 }}>
      
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label="type"
        onChange={handleChange}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="coffee">Coffee</MenuItem> 
        <MenuItem value="Tea">Tea</MenuItem>
        <MenuItem value="Milk">Milk</MenuItem> 
        <MenuItem value="bakery">Bakery</MenuItem>       
      </Select>
    </FormControl>
  </Box>
  </div>
  );
}
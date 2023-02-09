import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Menupopup from './Menupopup.js';

export default function ActionAreaCard(props) {
  const { coffee, onCoffeeClick }= props;

  const [centralModal, setBasicModal] = useState(false);


  // function handleClick(status){
  //   setBasicModal(status);

  //   return centralModal;
  // }


  
  return (
    <div className='card-item'>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image="./images/coffee-01.jpg"
          alt="coffee"
        />
        <CardContent
         >
          <Typography gutterBottom variant="h5" component="div">
            Espresso
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Espresso is straight coffee concentrate, usually enjoyed straight or with a sprinkle of sugar. 
          It has a full, strong coffee flavor and is known for its intensity
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Menupopup/>
    </div>
  );
}


/*import React from 'react'
import './Menuitem.css'

function Menuitem() {
  return (
    <div className="menu-item">
            <img src='/images/coffee-01.jpg'/>
            <h4>Coffee</h4>
        </div>
  )
}

export default Menuitem*/
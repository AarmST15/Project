import React, { useState } from 'react';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import './Menuitem.css'
import Cardmenu from './Cardmenu';
import coffees from '../data/coffees';


function Menuitem(props) {
    const coffeeElements = coffees.map((coffee, index)=>{
        return <Cardmenu key={index} coffee ={coffee}/>;
    })
  return (
    <div>
        <div className='card-item'>
        <h3>Recoment Menu</h3>

        <MDBRow className='row-cols-1 row-cols-md-2 g-2'>
           {coffeeElements}           
        </MDBRow>

        </div>

           
    </div>
  )
}

export default Menuitem



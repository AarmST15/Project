import React from 'react'
import Menuitem from '../components/Menuitem'
import './Onlineorders.css'
import Functionbar from '../components/Functionbar'

function Onlineorders() {
  
  
  return (
    <div className='order-line'>
      <h4>Online orders</h4>
      <div className='order-select-grid'>
          <Functionbar/>
      </div>
      <div className='order-item'>
        <Menuitem/>
      </div>
    </div>
  )
}

export default Onlineorders
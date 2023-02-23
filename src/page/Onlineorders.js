import React from 'react'
import Menuitem from '../components/Menuitem'
import './Onlineorders.css'
import Functionbar from '../components/Functionbar'

function Onlineorders() {
  
  
  return (
    <div className='order-line'>
      <h1>Online orders</h1>
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
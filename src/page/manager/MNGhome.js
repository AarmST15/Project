import React from 'react'
import MNGcard from '../../components/MNGcomp/MNGcard'
import Sidenavbar from '../../components/MNGcomp/Sidenavbar'
import './MNGhome.css'

function MNGhome() {
  return (
    <div className='mnghome-app'>
       <Sidenavbar/>
          <MNGcard/>
          
    </div>
  )
}

export default MNGhome
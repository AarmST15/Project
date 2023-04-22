import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Firstpage from './Firstpage'
import Home from './Home'
import Onlineorders from './Onlineorders'
import Contact from '../page/Contact';
import Login from '../page/Login';
import MNGhome from '../page/manager/MNGhome'
import MNGsetting from '../page/manager/MNGsetting';
import MNGorder from '../page/manager/MNGorder';
import MNGstatement from '../page/manager/MNGstatement';
import MNGorderhistory from '../page/manager/MNGorderhistory';
import MNGclients from '../page/manager/MNGclients';
import Profile from '../page/Profile'
import D from '../page/D'

import Menuitem from '../components/temp/MenuItem'

function PathRoute() {
  return (
    <div>
        <BrowserRouter>
            <Routes>              
                <Route path = "/" element={<Firstpage/>}/>
                <Route path = "/home" element={<Home/>}/>
                <Route path = "/onlineorders" element={<Onlineorders/>}/>
                <Route path = "/about" element={<D/>}/>
                <Route path = "/login" element={<Login/>}/> 
                <Route path = "/mnghome" element={<MNGhome/>}/> 
                <Route path = "/setting" element={<MNGsetting/>}/> 
                <Route path = "/order" element={<MNGorder/>}/>
                <Route path = "/statement" element={<MNGstatement/>}/>
                <Route path = "/orderhis" element={<MNGorderhistory/>}/>
                <Route path = "/clients" element={<MNGclients/>}/>                
                <Route path = "/profile" element={<Profile/>}/>   


                <Route path = "/temp" element={<Menuitem/>}/>              

            </Routes>
        </BrowserRouter>


    </div>
  )
}

export default PathRoute
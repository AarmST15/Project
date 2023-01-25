import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import './NavbarComp.css';

import Home from '../page/Home';
import Onlineoders from '../page/Onlineoders';
import Contact from '../page/Contact';
import Login from '../page/Login';

export default class NavbarComp extends Component {
  render() {
    let activeClassName = "nav-active"
    let unactiveClassName = "nav-unactive"
    return (
      <div>
        <BrowserRouter>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="/">POS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to ="/" className={({ isActive }) => isActive ? activeClassName :unactiveClassName}>Home</NavLink>
                        <NavLink to ="/onlineorders" className={({ isActive }) => isActive ? activeClassName :unactiveClassName}>Online Orders</NavLink>
                        <NavLink to ="/contact" className={({ isActive }) => isActive ? activeClassName : unactiveClassName }>Contact</NavLink>
                        <NavLink to ="/login" className={({ isActive }) => isActive ? activeClassName : unactiveClassName }>Login</NavLink>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/onlineorders" element={<Onlineoders/>}/>
                <Route path = "/contact" element={<Contact/>}/>
                <Route path = "/login" element={<Login/>}/>               
            </Routes>
        </BrowserRouter>
        </div>
    )
  }
}

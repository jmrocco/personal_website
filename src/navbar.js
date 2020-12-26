import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './index.css';

class Navigationbar extends Component
{
    render(){
        return(
            <Navbar id='nav_bar' sticky="top" collapseOnSelect expand='lg'>
                <Navbar.Brand id="nav_brand"><Link to="home_div" smooth="true" >Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Item id="nav_item"><Link to="project_div" smooth="true" >Projects</Link></Nav.Item>
                        <Nav.Item id="nav_item"><Link to="experience_div" smooth="true" >Experience</Link></Nav.Item>
                        <Nav.Item id="nav_item"><Link to="contact_div" smooth="true" >Contact</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export { Navigationbar };
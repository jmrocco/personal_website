import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

class Navigationbar extends Component
{
    render(){
        return(
            <Navbar id='nav_bar' fluid sticky="top" collapseOnSelect expand='lg'>
                <Navbar.Brand href="#home_div">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#experience_div">Experience</Nav.Link>
                        <Nav.Link href="#project_div">Projects</Nav.Link>
                        <Nav.Link href ="#contact_div">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export { Navigationbar };
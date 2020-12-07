import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

class Navigationbar extends Component
{
    render(){
        return(
            <Navbar>
                <Nav>
                    <Nav.Link href="#home_page">Home</Nav.Link>
                    <Nav.Link href="#experiences">Experience</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href ="#contact_info">Contact</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export { Navigationbar };
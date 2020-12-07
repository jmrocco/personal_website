import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBehance , FaGithub, FaLinkedin} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import './index.css';

// To do: add a contact forum
class ContactInfo extends Component
{
    render(){
        return(
            <div id = 'contact_info'>
                <Container>
                    <Row>
                        <Col>
                            <h1>Contact</h1>
                            <p>--Something about contacting me--</p>
                            <ContactIcons />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
const ContactIcons = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <a href= "https://jrocco.myportfolio.com/" target = "_blank" rel="noopener noreferrer">
                        <FaBehance classname = "contact-icon" />
                    </a>
                </Col>
                <Col>
                    <a href= "https://www.linkedin.com/in/julietterocco" target = "_blank" rel="noopener noreferrer">
                        <FaLinkedin classname = "contact-icon" />
                    </a>
                </Col>
                <Col>
                    <a href= "https://github.com/jmrocco" target = "_blank" rel="noopener noreferrer">
                        <FaGithub classname = "contact-icon" />
                    </a>
                </Col>
                <Col>
                    <a href= "mailto:jmrocco@edu.uwaterloo.ca" target = "_blank" rel="noopener noreferrer">
                        <IoIosMail classname = "contact-icon" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
export { ContactInfo , ContactIcons };
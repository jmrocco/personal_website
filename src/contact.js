import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaBehance , FaGithub, FaLinkedin} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import   resume  from './images/juliette_rocco_resume.pdf';
import './index.css';

// To do: add a contact forum
class ContactInfo extends Component
{
    render(){
        return(
            <div id= "contact_div">
                <Container id="contact_info">
                    <h1 id = 'title'>Contact</h1>
                    <div id="contact_items">
                        <Row className="justify-content-md-center">
                            <Col id="contact_text" xs lg="auto">
                                <p>If you would like to get in contact with me please don't hesistate.</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <p id="contact_element"><FaLinkedin id= "contact-icon" />julietterocco</p>
                            <p id="contact_element"><IoIosMail id="contact-icon" />jmrocco@uwaterloo.ca</p>
                        </Row>
                        <Row id="contact_buttons" className="justify-content-md-center">
                                <Button id="contact_button" href={resume} download="juliette_rocco_resume.pdf" target="_blank">Resume</Button>
                        </Row>
                        <Row className="justify-content-md-center" id ="made_by" xs>
                            <p>Made with&nbsp;<span class="heart">❤️</span>&nbsp;Juliette Rocco 2020</p>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}
const ContactIcons = () => {
    return (
        <Container id="contact_icons">
            <Row lg className="justify-content-md-center" >
                <Col xs lg="auto">
                    <a href= "https://jrocco.myportfolio.com/" target = "_blank" rel="noopener noreferrer">
                        <FaBehance id = "contact-icon" />
                    </a>
                </Col>
                <Col xs lg="auto">
                    <a href= "https://www.linkedin.com/in/julietterocco" target = "_blank" rel="noopener noreferrer">
                        <FaLinkedin id = "contact-icon" />
                    </a>
                </Col>
                <Col xs lg="auto">
                    <a href= "https://github.com/jmrocco" target = "_blank" rel="noopener noreferrer">
                        <FaGithub id = "contact-icon" />
                    </a>
                </Col>
                <Col xs lg="auto">
                    <a href= "mailto:jmrocco@uwaterloo.ca" target = "_blank" rel="noopener noreferrer">
                        <IoIosMail id = "contact-icon" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
export { ContactInfo , ContactIcons };
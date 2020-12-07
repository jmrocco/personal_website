import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

class ContactInfo extends Component
{
    render(){
        return(
            <h1>This is my contact information</h1>
        );
    }
}
const ContactIcons = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Behance icon</p>
                </Col>
                <Col>
                    <p>Linkedin icon</p>
                </Col>
                <Col>
                    <p>Github icon</p>
                </Col>
                <Col>
                    <p>Mail icon</p>
                </Col>
                <Col>
                    <p>Resume icon</p>
                </Col>
            </Row>
        </Container>
    );
}
export { ContactInfo , ContactIcons };
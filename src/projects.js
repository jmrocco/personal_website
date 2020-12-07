import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './index.css';

class Projects extends Component
{
    render(){
        return(
            <div classname = "projects">
                <Container>
                    <h1>Projects</h1>
                    <Row>
                        {projects.map(project => {
                            return (
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.skills}<br/><br/>
                                            {project.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

const projects = [
    {
        key: 1,
        title: "I'm Feeling",
        skills: "--insert skills learned here--",
        description: "--insert description here--"
    },
    {
        key: 2,
        title: "Smart Mirror",
        skills: "--insert skills learned here--",
        description: "--insert description here--"
    },
    {
        key: 3,
        title: "Personal Website",
        skills: "--insert skills learned here--",
        description: "--insert description here--"
    }
]


export { Projects };
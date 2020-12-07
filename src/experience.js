import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './index.css';

class Experience extends Component
{
    render(){
        return(
            <div classname = 'experiences'>
                <Container>
                    <h1>Experience</h1>
                    <Row>
                    {work_experience.map(experience =>{
                        return (
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{experience.title}</Card.Title>
                                            <Card.Text>{experience.company}<br/><br/>
                                            {experience.date}<br/><br/>
                                            {experience.skills}<br/><br/>
                                            {experience.description}</Card.Text>
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

const work_experience = [
    {
        key: 1,
        title: "Software Engineering Intern",
        company: "ConsenSys",
        date: "January 2019 to April 2019",
        skills: "--insert skills learned here--",
        description: "--insert description here--"
    },
    {
        key: 2,
        title: "Electrical Engineer",
        Company: "Avidbots",
        date: "January 2020 to April 2020",
        skills: "--insert skills learned here--",
        description: "--insert description here--"
    },
    {
        key: 3,
        title: "WEEF TA",
        company: "University of Waterloo: Faculty of Engineering",
        date: "September 2020 to December 2020",
        skills: "--insert skills learned here--",
        description: "--insert description here--"
    }
]


export { Experience };
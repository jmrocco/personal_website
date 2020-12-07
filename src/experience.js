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
            <div id = 'experiences'>
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
        skills: "Fullstack Web APIs",
        description: "Designed a media conversion API to be used with the Kauri Blockchain platform. " +
                     "Wrote extensive technical documentation for the beginner Blockchain user as well as " +
                     "optimized smart contract code base usuage by 90%."
                     
    },
    {
        key: 2,
        title: "Electrical Engineer",
        Company: "Avidbots",
        date: "January 2020 to April 2020",
        skills: "Electrical Q&A & Firmware Development",
        description: "I was apart of many different tasks such as micro-soldering PCB boards, " +
                     "creating electrical drawings and wiring harnesses, troubleshooting robots, " +
                     "and assisting in firmware development."
    },
    {
        key: 3,
        title: "WEEF TA",
        company: "University of Waterloo: Faculty of Engineering",
        date: "September 2020 to December 2020",
        skills: "Python scripting and UNIX administration",
        description: "As an electrical and computer engineering teaching assistant, I helped " +
                     "run the first year introduction to programming class in an online environment. " +
                    "Responsibilites also included designing, testing and implementing changes to a production codebase."
    }
]


export { Experience };
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import avidbots from './images/avidbots.png';
import weef_ta from './images/weef_ta.png';
import consensys from './images/consensys.png';

import './index.css';
import { Accordion } from 'react-bootstrap';

class Experience extends Component
{

    render(){
        return(
            <div>
                <Container id = 'experiences'fluid >
                    <h1 id = 'title'>Experience</h1>
                    <Row>
                    {work_experience.map(experience =>{
                        return (
                                <Col lg>
                                    <Card id= 'experience_card'>
                                        <Card.Body>
                                            <Card.Img variant="top" src={experience.image} alt= {experience.alt}/>
                                            <Card.Title>{experience.title}</Card.Title>
                                            <Card.Text>
                                                <Container>
                                                    <Row>
                                                        {experience.company}
                                                    </Row>
                                                    <Row>
                                                        {experience.date}
                                                    </Row>
                                                </Container>
                                            </Card.Text>
                                            <Accordion>
                                                <Accordion.Toggle as={Button} variant="button" eventKey = "0" id='readButton'>
                                                    Read more
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey = "0">
                                                    <Card.Text>
                                                        {experience.skills}<br/><br/>
                                                        {experience.description}
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                            </Accordion>
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
        image: consensys,
        alt: "Consensys logo",
        show: "false",
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
        image: avidbots,
        alt: "Avidbots logo",
        show: "false",
        company: "Avidbots",
        date: "January 2020 to April 2020",
        skills: "Electrical Q&A & Firmware Development",
        description: "I was apart of many different tasks such as micro-soldering PCB boards, " +
                     "creating electrical drawings and wiring harnesses, troubleshooting robots, " +
                     "and assisting in firmware development."
    },
    {
        key: 3,
        title: "WEEF TA",
        image: weef_ta,
        alt: "WEEF TA logo",
        show: "false",
        company: "University of Waterloo",
        date: "September 2020 to December 2020",
        skills: "Python scripting and UNIX administration",
        description: "As an electrical and computer engineering teaching assistant, I helped " +
                     "run the first year introduction to programming class in an online environment. " +
                    "Responsibilites also included designing, testing and implementing changes to a production codebase."
    }
]


export { Experience };
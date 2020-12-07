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
            <div id = "projects">
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
                                            {project.description}<br/><br/>
                                            {project.why}</Card.Text>
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
        skills: "APIs & fullstack development",
        description: "Mood-based recommendation web application",
        why: "During the COVID lockdown in April 2020, I built myself a web application " +
             "using JavaScript (express.js) that could recommend me books, movies, and music " +
             "that reflected how I was feeling."
    },
    {
        key: 2,
        title: "Smart Mirror",
        skills: "Google Cloud Platform & Linux proficiency",
        description: "Google Assistant interactive smart mirror",
        why: "Getting ready in the morning is much more entertaining with this smart mirror!" +
             "I decided to make this project in response to an idea I saw on the internet." + 
             "The entire mirror was built from scratch. Using a Raspberry Pi along with Python " +
             "and JavaScript libraries, this mirror can tell you the weather while you brush your teeth."
    },
    {
        key: 3,
        title: "Personal Website",
        skills: "Web Development",
        description: "Personal website to display skills and accomplishments",
        why: "In Summer 2019 I wrote my first personal website; Although pretty on desktop " +
             "it was not a responsive application. I created this website as an update to my old " +
             "one. Since v1, I've learned new skills and techniques in web development that I've " +
             "implemented into this website."
    }
]


export { Projects };
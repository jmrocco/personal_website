import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import avidbots from './images/avidbots.png';
import weef_ta from './images/weef_ta.png';
import consensys from './images/consensys.png';
import './index.css';

class Projects extends Component
{
    render(){
        return(
            <div id="project_div">
                <Container id='projects'>
                    <h1 id = 'title'>Projects</h1>
                    <Row>
                        {projects.map(project => {
                            return (
                                <Col>
                                    <Card id='project_card'>
                                        <Card.Body>
                                            <Container fluid>
                                                <Row lg>
                                                        <Card.Img id="image" src={project.image} alt= {project.alt}/>
                                                        <Card.Title>{project.title}</Card.Title>
                                                        <Card.Text>{project.skills}</Card.Text>
                                                        <Card.Text>{project.description}</Card.Text>
                                                        <Card.Text>{project.why}</Card.Text>
                                                </Row>
                                            </Container>
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
             "that reflected how I was feeling.",
        image: avidbots,
        alt: "placeholder"
    },
    {
        key: 2,
        title: "Smart Mirror",
        skills: "Google Cloud Platform & Linux proficiency",
        description: "Google Assistant interactive smart mirror",
        why: "Getting ready in the morning is much more entertaining with this smart mirror!" +
             "I decided to make this project in response to an idea I saw on the internet." + 
             "The entire mirror was built from scratch. Using a Raspberry Pi along with Python " +
             "and JavaScript libraries, this mirror can tell you the weather while you brush your teeth.",
        image : weef_ta,
        alt: "placeholder"
    },
    {
        key: 3,
        title: "Personal Website",
        skills: "Web Development",
        description: "Personal website to display skills and accomplishments",
        why: "In Summer 2019 I wrote my first personal website; Although pretty on desktop " +
             "it was not a responsive application. I created this website as an update to my old " +
             "one. Since v1, I've learned new skills and techniques in web development that I've " +
             "implemented into this website.",
        image: consensys,
        alt: "placeholder"
    }
]


export { Projects };
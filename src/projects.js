import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import smart_mirror from './images/smart_mirror.jpg';
import im_feeling from './images/im_feeling.png';
import website from './images/website.png';
import './index.css';

class Projects extends Component
{
  
    render(){
        return(
            <div id="project_div">
                <Container id='projects'>
                    <h1 id = 'title'>Projects</h1>
                        {projects.map(project => {
                            return (
                                <Row className="justify-content-md-center">
                                    <Card id='project_card'>
                                        <Card.Body>
                                            <Container id = "project_content">
                                                <Row className="justify-content-md-center">
                                                    <Col class="center-block">
                                                        <Card.Title id="project_title">{project.title}
                                                        <span role="img" aria-label ={project.emoji_label}>
                                                        {project.emoji}‍
                                                        </span></Card.Title>
                                                        <Card.Text>{project.description}</Card.Text>
                                                        <Card.Text>{project.skills}</Card.Text>
                                                        <Card.Text>{project.why}</Card.Text>
                                                    </Col> 
                                                    <Col id="right_block_project" xs={11} md={5}>
                                                        <Card.Img id="project_image" src={project.image} alt= {project.alt}/>
                                                        <Button id="button" href={project.link} target="_blank" >Github</Button>
                                                    </Col> 
                                                </Row>          
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            );
                        })}
                </Container>
            </div>
        );
    }
}

const projects = [
    {
        key: 1,
        title: "I'm Feeling",
        skills: "Skills: APIs & Fullstack Development",
        description: "Mood-based recommendation web application.",
        why: "During the COVID lockdown in April 2020, I built myself a web application " +
             "using JavaScript (express.js) that could recommend me books, movies, and music " +
             "that reflected how I was feeling.",
        image: im_feeling,
        alt: "placeholder",
        emoji_label: "performing arts",
        emoji: '🎭',
        link: "https://github.com/jmrocco/im_feeling"
    },
    {
        key: 2,
        title: "Smart Mirror",
        skills: "Skills: Google Cloud Platform & Linux Proficiency",
        description: "Google Assistant interactive smart mirror.",
        why: "Getting ready in the morning is much more entertaining with this smart mirror!" +
             "I decided to make this project in response to an idea I saw on the internet." + 
             "The entire mirror was built from scratch. Using a Raspberry Pi along with Python " +
             "and JavaScript libraries, this mirror can tell you the weather while you brush your teeth.",
        image : smart_mirror,
        alt: "placeholder",
        emoji_label: "selfie",
        emoji: '🤳',
        link: "https://github.com/jmrocco/smart-mirror"
    },
    {
        key: 3,
        title: "Personal Website",
        skills: "Skills: Web Development",
        description: "Personal website to display skills and accomplishments.",
        why: "In the summer of 2019 I wrote my first personal website; Although attractive on desktop " +
             "it was not a responsive application. I created this website as an update to my old " +
             "one. Since version 1.0, I've learned new skills and techniques in web development that I've " +
             "applied in this website. Picture shown is of version 1.0.",
        image: website,
        alt: "placeholder",
        emoji_label: "laptop",
        emoji: '💻',
        link: "https://github.com/jmrocco/my-website"
    }
]




export { Projects };
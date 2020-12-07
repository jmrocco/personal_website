import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ReactDOM from 'react-dom';
import './index.css';

import { ContactInfo, ContactIcons } from './contact.js';
import { Experience } from './experience.js';
import { Projects } from './projects.js';
import { Navigationbar } from './navbar.js';



class Home extends Component
{
  render(){
    return(
      <div id = "home_page">
        <Navigationbar />
          <Container>
            <Row>
              <h1>Hi, nice to meet you! My name is Juliette.</h1>
            </Row>
            <Row>
              <p>I am a 2nd year Computer Engineering student at The University of 
                Waterloo who is looking to create and be a part of tomorrows future. I am a
                passionate and energetic person with a love for learning new things and 
                meeting new people.<br/><br/>
                Some of my interests include playing tennis, trying new recipes from Mastering
                The Art of French Cooking, Photoshopping myself into surreal scenes, renaissance
                artwork, and literature of all kinds.  <br/><br/>
                I created this website as a way to promote some of the projects and experiences
                that I've been fortunate enough to be apart of. I am actively looking for new 
                opportunities and contacts, please contact me!     
              </p>
            </Row>
            <Row>
              <ContactIcons />
            </Row>
          </Container>
          <Experience />
          <Projects />
          <ContactInfo />
      </div>
    );
  }
}

ReactDOM.render(<Home />,document.getElementById('root'));


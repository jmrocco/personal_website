import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Aboutme } from './about.js';
import { Contactinfo } from './contact.js';
import { Experience } from './experience.js';
import { Projects } from './projects.js';
import { Navigationbar } from './navbar.js';



class Home extends Component
{
  render(){
    return(
      <div classname = "homepage">
        <h1>This is the home page.</h1>
        <Navigationbar />
        <Contactinfo />
        <Aboutme />
        <Experience />
        <Projects />
      </div>
    );
  }
}

ReactDOM.render(<Home />,document.getElementById('root'));


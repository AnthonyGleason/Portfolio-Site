import React from 'react';
import '../styles/app.css';
import About from './About';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';

export default function App(){
  return(
    <div className='App'>
      <Intro />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

/*
  intro has picture of me side by side with intro card

  about me has a box with a quote and shows about me text

  my projects has a slideshow of the projects i made the user can press on projects to learn more and it takes github

  contact, github, linkedin, mail, resume
*/
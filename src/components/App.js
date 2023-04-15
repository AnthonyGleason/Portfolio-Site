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
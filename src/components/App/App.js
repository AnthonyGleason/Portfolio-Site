import React from 'react';
import './App.css';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


export default function App(){
  
  return(
    <main className='App'>
      <Intro />
      <About />
      <Projects />
      <Skills />
    </main>
  )
}
import React, { Suspense } from 'react';
import './App.css';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Projects = React.lazy(() => import('../Projects/Projects'));
const Skills = React.lazy(() => import('../Skills/Skills'));

export default function App(){
  
  return(
    <main className='App'>
      <div className='app-home-wrapper'>
        <Nav />
        <div className='app-content-container'>
          <Intro />
          <About />
          <Suspense>
            <Projects />
            <Skills />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  )
}
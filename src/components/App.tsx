import React from 'react';
import '../styles/App.css';
import homeImg from '../assets/home-img.jpg';
import linkedinLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
function App() {
  return (
    <div className="app">
      <div className='sticky-nav'>
        <div className='button'>About</div>
        <div className='button'>Projects</div>
        <div className='button'>Contact</div>
        <img src={githubLogo} alt='github logo' />
        <img src={linkedinLogo} alt='linkedin logo' />
      </div>
      <div className='home'>
        <div className='title-container'>
          <img className='home-img' alt='me' src={homeImg} />
          <div className='name'>Anthony Infortunio</div>
          <div className='title'>Web Developer</div>
        </div>
      </div>
      <div className='about'>
        about me
      </div>
      <div className='projects'>
        projects
      </div>
      <div className='contact'>
        contact
      </div>
    </div>
  );
}

export default App;

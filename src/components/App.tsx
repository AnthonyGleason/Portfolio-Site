import React from 'react';
import '../styles/App.css';
import greetingImg from '../assets/greeting.jpg';
import html from '../assets/logos/html.svg';
import css from '../assets/logos/css.svg';
import javascript from '../assets/logos/javascript.svg';
import typescript from '../assets/logos/typescript.svg';
import react from '../assets/logos/react.svg';
import webpack from '../assets/logos/webpack.svg';
import firebase from '../assets/logos/firebase.svg';
import linux from '../assets/logos/linux.svg';
import jest from '../assets/logos/jest.svg';
import node from '../assets/logos/node.svg';
import vscode from '../assets/logos/vscode.svg';
import git from '../assets/logos/git.svg';
import rust from '../assets/logos/rust.svg';
export default function App(){
  return(
    <div className='app'>
      <div className='greeting'>
        <div className='greeting-text'>
          Hello! My name is Anthony, welcome to my personal website! I am a passionate and enthusiastic web developer with a love for FOSS. On this website you can view my projects and personal blog where I talk about Unix and Web Development related topics!
        </div>
        <img className='greeting-img' src={greetingImg} alt='me' />
      </div>
      <div className='about-me'>
        <div className='about-me-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt quas voluptate aut repudiandae veritatis minus pariatur molestiae soluta laudantium, iure optio iste iusto corporis sint consectetur tempore autem modi.</div>
      </div>
      <div className='skills'>
        <div className='skills-title'>My Skills</div>
        <div className='skills-container'>
          <img alt='html' src={html} />
          <img alt='css' src={css} />
          <img alt='javascript' src={javascript} />
          <img alt='typescript' src={typescript} />
          <img alt='react' src={react} />
          <img alt='webpack' src={webpack} />
          <img alt='firebase' src={firebase} />
          <img alt='linux' src={linux} />
          <img alt='jest' src={jest} />
          <img alt='vscode' src={vscode} />
          <img alt='git' src={git} />
        </div>
        <div className='learning-title'>Learning</div>
        <div className='learning-container'>
          <img alt='nodejs' src={node} />
          <img alt='rust' src={rust} />
        </div>
      </div>
    </div>
    
  )
}
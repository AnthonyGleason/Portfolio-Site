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
export default function App(){
  return(
    <div className='app'>
      <div className='greeting'>
        <div className='greeting-text'>
          Hello! My name is Anthony, welcome to my personal website! I am a passionate and enthusiastic web developer with a love for FOSS.
          On this website you can view my projects and personal blog where I talk about Unix and Web Development related topics!
        </div>
        <img className='greeting-img' src={greetingImg} alt='me' />
      </div>
      <div className='skills'>
        <div className='skills-title'>My Skills</div>
        <div className='skills-container'>
          <a href='https://en.wikipedia.org/wiki/HTML'><img alt='html' src={html} /></a>
          <a href='https://en.wikipedia.org/wiki/CSS'><img alt='css' src={css} /></a>
          <a href='https://www.javascript.com/'><img alt='javascript' src={javascript} /></a>
          <a href='https://www.typescriptlang.org/'><img alt='typescript' src={typescript} /></a>
          <a href='https://reactjs.org/'><img alt='react' src={react} /></a>
          <a href='https://webpack.js.org/'><img alt='webpack' src={webpack} /></a>
          <a href='https://firebase.google.com/'><img alt='firebase' src={firebase} /></a>
          <a href='https://www.linuxfoundation.org/'><img alt='linux' src={linux} /></a>
          <a href='https://jestjs.io/'><img alt='jest' src={jest} /></a>
          <a href='https://code.visualstudio.com/'><img alt='vscode' src={vscode} /></a>
          <a href='https://git-scm.com/'><img alt='git' src={git} /></a>
          <a href='https://nodejs.dev/en/'><img alt='nodejs' src={node} /></a>
        </div>
      </div>
    </div>
    
  )
}
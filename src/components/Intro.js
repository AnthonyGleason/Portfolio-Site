import React from 'react';
import '../styles/intro.css';
import me from '../assets/me.jpg';
export default function Intro(){
  return(
    <div className='intro' id='intro'>
      <img src={me} className='intro-img' />
      <div className='intro-content'>
        <h1 className='name'>
          Anthony <br />
          Infortunio
        </h1>
        <h3 className='title'>Full-Stack Web Developer</h3>
      </div>
    </div>
  )
}
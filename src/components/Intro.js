import React from 'react';
import '../styles/intro.css';
import me from '../assets/me.jpg';
export default function Intro(){
  return(
    <section className='intro' id='intro'>
      <header className='intro-content'>
        <h1 className='name'>
          Anthony <br />
          Infortunio
        </h1>
        <h3 className='title'>Junior Full-Stack Web Developer</h3>
      </header>
      <img src={me} className='intro-img' alt='me' />
    </section>
  )
};
import React, { useState } from 'react';
import './About.css';

export default function About() {
  return (
    <section
      id='about'
      className='about'
    >
      <article className='about-content'>
        <p className='about-text'>
          Hey, I'm Anthony, a Full Stack Developer on a mission to bring your digital dreams to life. No buzzwords, just{' '}
          <em className='em'>clean code</em> and <em className='em'>innovative web applications</em>. I'm all about making 
          unique and memorable user experiences. 
        </p>
      </article>
    </section>
  );
}

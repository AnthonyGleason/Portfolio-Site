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
          Hello! I'm Anthony, an experienced, results-oriented software engineer. I build applications that are scalable, responsive, accessible, maintainable and high-performing using modern software engineering best practices.
        </p>
      </article>
    </section>
  );
}

import React from 'react';
import '../styles/nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <a href="#intro">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#footer">Contact</a>
    </nav>
  );
}
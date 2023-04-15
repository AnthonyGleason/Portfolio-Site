import React from 'react';
import '../styles/nav.css';
export default function Nav(){
  return(
    <div className='nav'>
      <ul className='nav-buttons'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
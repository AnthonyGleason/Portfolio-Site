import React from 'react';
import '../styles/Nav.css';
export default function Nav(){
  return(
    <div className='nav'>
      <div className='nav-title'>Anthony Infortunio</div>
      <div className='nav-buttons'>
        <div>Home</div>
        <div>Projects</div>
        <div>Blog</div>
      </div>
    </div>
  )
}
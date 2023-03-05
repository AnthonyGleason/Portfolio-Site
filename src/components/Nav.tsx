import React from 'react';
import '../styles/Nav.css';
import projects from '../assets/projects.svg';
import blog from '../assets/blog.svg';
import home from '../assets/home.svg';
export default function Nav(){
  return(
    <div className='nav'>
      <div className='nav-title' onClick={()=>window.location.href='/'}>Anthony Infortunio</div>
      <div className='nav-buttons'>
        <div className='home-button' onClick={()=>{window.location.href='/'}}>Home</div>
        <div className='projects-button' onClick={()=>{window.location.href='/projects'}}>Projects</div>
        <div className='blog-button' onClick={()=>{window.location.href='/blog'}}>Blog</div>
      </div>
    </div>
  )
}
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
        <div className='home-wrapper' onClick={()=>{window.location.href='/'}}>
          <img src={home} alt='home' />
          <div>Home</div>
        </div>
        <div className='projects-wrapper' onClick={()=>{window.location.href='/projects'}} >
          <img src={projects} alt='projects' />
          <div>Projects</div>
        </div>
        <div className='blog-wrapper' onClick={()=>{window.location.href='/blog'}} >
          <img src={blog} alt='blog' />
          <div>Blog</div>
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import linkedinLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
export default function Nav(){
  return(
    <div className='nav'>
      <div onClick={()=>{window.location.href='/'}} className='home-container'>
        <img alt='home' />
        <div className='button'>Home</div>
      </div>
      <div onClick={()=>{window.location.href='/about'}} className='about-container'>
        <img alt='about' />
        <div className='button'>About</div>
      </div>
      <div onClick={()=>{window.location.href='/projects'}} className='projects-container'>
        <img alt='projects' />
        <div className='button'>Projects</div>
      </div>
      <div onClick={()=>{window.location.href='/blog'}} className='blog-container'>
        <img alt='blog' />
        <div className='button'>Blog</div>
      </div>
      <div onClick={()=>{window.location.href='/contact'}} className='contact-container'>
        <img alt='contact' />
        <div className='button'>Contact</div>
      </div>
      <img src={githubLogo} alt='github logo' />
      <img src={linkedinLogo} alt='linkedin logo' />
    </div>
  )
}
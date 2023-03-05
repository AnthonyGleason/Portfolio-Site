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
          <svg className='home-img' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"/></svg>
          <div>Home</div>
        </div>
        <div className='projects-wrapper' onClick={()=>{window.location.href='/projects'}} >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"/></svg>
          <div>Projects</div>
        </div>
        <div className='blog-wrapper' onClick={()=>{window.location.href='/blog'}} >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3v18h18V3H3m15 15H6v-1h12v1m0-2H6v-1h12v1m0-4H6V6h12v6Z"/></svg>
          <div>Blog</div>
        </div>
      </div>
    </div>
  )
}
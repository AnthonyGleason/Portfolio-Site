import React from 'react';
import '../styles/nav.css';
export default function Nav(){
  return(
    <div className='nav'>
      <ul className='nav-buttons'>
        <li onClick={()=>{scrollToElement('intro')}}>Home</li>
        <li onClick={()=>{scrollToElement('about')}}>About</li>
        <li onClick={()=>{scrollToElement('projects')}}>Projects</li>
        <li onClick={()=>{scrollToElement('skills')}}>Skills</li>
        <li onClick={()=>{scrollToElement('footer')}}>Contact</li>
      </ul>
    </div>
  )
}
function scrollToElement(id) {
  document.querySelector(`#${id}`).scrollIntoView({behavior: "smooth"});
}

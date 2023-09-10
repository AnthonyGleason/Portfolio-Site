import React,{useEffect} from 'react';
import './Nav.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Nav() {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
  
  return (
    <nav className='nav' data-aos='fade-in'>
      <ol>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ol>
    </nav>
  );
}
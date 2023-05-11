import React,{useEffect} from 'react';
import '../styles/nav.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Nav() {
  useEffect(()=>{
    Aos.init({duration: 2500});
  },[])
  return (
    <nav data-aos='fade-in' className='nav'>
      <a href="#intro">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#footer">Contact</a>
    </nav>
  );
}
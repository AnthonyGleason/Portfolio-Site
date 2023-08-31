import React,{useEffect} from 'react';
import '../styles/about.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function About(){
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[]);

  return(
    <section data-aos='fade-right' className='about' id='about'>
      <p className='about-content'>
        " 
          Hello! I'm Anthony, a Full Stack Developer. I am <em className='em'>passionate</em> about building high-quality web applications that <em className='em'>provide memorable user experiences</em>.
          I am always <em className='em'>eager to learn</em> new skills and expand my knowledge. If you're interested in 
          collaborating on a project or just want to chat about programming, feel free to reach out!
        "
      </p>
      <h1 className='about-title'>About Me</h1>
    </section>
  )
}
import React,{useEffect} from 'react';
import './About.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function About(){
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[]);

  return(
    <section className='about' id='about'>
      <div className='about-content'>
        <h1 data-aos='fade-right' className='about-title'>About Me</h1>
        <p data-aos='fade-right' className='about-text'>
          "Hello! I'm Anthony, a Full Stack Developer. I am <em className='em'>passionate</em> about building high-quality web applications that <em className='em'>provide memorable user experiences</em>.
            I am always <em className='em'>eager to learn</em> new skills and expand my knowledge. If you're interested in 
            collaborating on a project or just want to chat about programming, feel free to reach out!"
        </p>
      </div>
    </section>
  )
}
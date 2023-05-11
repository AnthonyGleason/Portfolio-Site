import React,{useEffect} from 'react';
import '../styles/about.css';
import Aos from 'aos';
import "aos/dist/aos.css";
export default function About(){
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])
  return(
    <section className='about' id='about'>
      <p data-aos="fade-right" className='about-content'>
        " 
          Hello my name is Anthony, I am <em className='em'>passionate</em> about building high-quality software that <em className='em'>solves real-world problems</em>.
          I am always <em className='em'>eager to learn</em> new skills and expand my knowledge. If you're interested in 
          collaborating on a project or just want to chat about programming, feel free to reach out!
        "
      </p>
      <h1 data-aos="fade-right" className='about-title'>About Me</h1>
    </section>
  )
}
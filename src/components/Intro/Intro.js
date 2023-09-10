import React, {useEffect} from 'react';
import './Intro.css';
import me from '../../assets/me.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Intro(){
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return(
    <section className='intro' id='intro'>
      <div className='intro-content'>
        <img data-aos='fade-in' src={me} className='intro-img' alt='me' />
        <header data-aos='fade-in' className='intro-heading-wrapper'>
          <h1 className='name'>Anthony Gleason</h1>
          <h3 className='title intro-title'>Full Stack Developer</h3>
        </header>
      </div>
    </section>
  )
};
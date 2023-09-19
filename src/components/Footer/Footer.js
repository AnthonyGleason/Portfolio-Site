import React,{useEffect} from 'react';
import './Footer.css';
import ContactButtons from '../ContactButtons/ContactButtons';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Footer(){
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
  return(
    <footer className='footer' id='footer'>
      <h1 data-aos='fade-right' className='footer-title'>Contact Me</h1>
      <p data-aos='fade-right' className='footer-text'>
        <span>"I look forward to reading your message!"</span>
        <em className='em' data-aos='fade-right'><a className='mail' href='mailto:contact@anthonygleason.com'>contact@anthonygleason.com</a></em>
      </p>
      <ContactButtons />
    </footer>
  )
}
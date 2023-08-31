import React,{useEffect} from 'react';
import '../styles/footer.css';
import ContactButtons from './ContactButtons';
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
        " I look forward to reading your message! "
        <br />
        <br />
        <em className='em' data-aos='fade-right'><a className='mail' href='mailto:contact@anthonyinfortun.io'>contact@anthonyinfortun.io</a></em>
      </p>
      <ContactButtons />
      {/* <img data-aos='fade-right' className='arrow' src={arrow} alt='arrow pointing right' /> */}
    </footer>
  )
}
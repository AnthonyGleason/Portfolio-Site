import React,{useEffect} from 'react';
import '../styles/footer.css';
import arrow from '../assets/arrow.svg';
import Aos from 'aos';
import "aos/dist/aos.css";
export default function Footer(){
  useEffect(()=>{
    Aos.init({duration: 800});
  },[])
  return(
    <footer className='footer' id='footer'>
      <h1 data-aos='fade-right' className='footer-title'>Contact Me</h1>
      <p data-aos='fade-right' className='footer-text'>
        " I look forward to reading your message! "<br /> <br />
        <em className='em'><a className='mail' href='mailto:contact@anthonyinfortun.io'>contact@anthonyinfortun.io</a></em>
      </p>
      {/* <img data-aos='fade-right' className='arrow' src={arrow} alt='arrow pointing right' /> */}
    </footer>
  )
}
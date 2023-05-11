import React,{useEffect} from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import mailImg from '../assets/mail.svg';
import resumeImg from '../assets/resume.svg';
import resumePDF from '../assets/resume.pdf';
import '../styles/contact-buttons.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function ContactButtons() {
  useEffect(()=>{
    Aos.init({duration: 2500});
  },[])
  return (
    <ul data-aos='fade-in' className='contact-buttons'>
      <li>
        <a href='https://www.github.com/antinf'>
          <img className='expand' src={githubLogo} alt='github logo' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/anthony-infortunio-872645220'>
          <img className='expand' src={linkedinLogo} alt='linkedin logo' />
        </a>
      </li>
      <li>
        <a href='mailto:contact@anthonyinfortun.io'>
          <img className='expand' src={mailImg} alt='mailing envelope' />
        </a>
      </li>
      <li>
        <a href={resumePDF}>
          <img className='expand' src={resumeImg} alt='white paper' />
        </a>
      </li>
    </ul>
  );
}

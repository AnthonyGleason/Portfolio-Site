import React,{useEffect} from 'react';
import githubLogo from '../../assets/icons/github.svg';
import linkedinLogo from '../../assets/icons/linkedin.svg';
import mailImg from '../../assets/icons/mail.svg';
import resumeImg from '../../assets/icons/resume.svg';
import resumePDF from '../../assets/Anthony-Gleason-Resume.pdf';
import './ContactButtons.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function ContactButtons() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <ol data-aos='fade-in' className='contact-buttons'>
      <li>
        <a href='https://www.github.com/anthonygleason'>
          <img className='expand' src={githubLogo} alt='github logo' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/antgleason'>
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
    </ol>
  );
}

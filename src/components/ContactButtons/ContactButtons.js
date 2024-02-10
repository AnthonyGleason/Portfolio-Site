import React,{useEffect} from 'react';
import githubLogo from '../../assets/icons/github.svg';
import linkedinLogo from '../../assets/icons/linkedin.svg';
import mailImg from '../../assets/icons/mail.svg';
import resumeImg from '../../assets/icons/resume.svg';
import resumePDF from '../../assets/Anthony-Infortunio-Resume.pdf';
import './ContactButtons.css';

export default function ContactButtons() {

  return (
    <ol className='contact-buttons'>
      <li>
        <a href='https://www.github.com/AnthonyGleason'>
          <img loading='lazy' decoding='async' className='expand' src={githubLogo} alt='github logo' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/antgleason'>
          <img loading='lazy' decoding='async' className='expand' src={linkedinLogo} alt='linkedin logo' />
        </a>
      </li>
      <li>
        <a href='mailto:contact@anthonygleason.com'>
          <img loading='lazy' decoding='async' className='expand' src={mailImg} alt='mailing envelope' />
        </a>
      </li>
      <li>
        <a href={resumePDF}>
          <img loading='lazy' decoding='async' className='expand' src={resumeImg} alt='white paper' />
        </a>
      </li>
    </ol>
  );
}

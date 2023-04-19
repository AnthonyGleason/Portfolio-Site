import React from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import mailImg from '../assets/mail.svg';
import resumeImg from '../assets/resume.svg';
import '../styles/contact-buttons.css';
export default function ContactButtons(){
  return(
    <div className='contact-buttons'>
      <img className='expand' onClick={()=>{window.location.href='https://www.github.com/antinf'}} src={githubLogo} alt='github logo' />
      <img className='expand' onClick={()=>{window.location.href='https://www.linkedin.com/in/anthony-infortunio-872645220'}} src={linkedinLogo} alt='linkedin logo' />
      <img className='expand' onClick={()=>{window.location.href='mailto:contact@anthonyinfortun.io'}} src={mailImg} alt='mailing envelope' />
      <img className='expand' src={resumeImg} alt='white paper' />
    </div>
  )
};
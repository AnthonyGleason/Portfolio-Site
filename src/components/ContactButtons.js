import React from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import mailImg from '../assets/mail.svg';
import '../styles/contact-buttons.css';
export default function ContactButtons(){
  return(
    <div className='contact-buttons'>
      <img src={githubLogo} alt='github logo' />
      <img src={linkedinLogo} alt='linkedin logo' />
      <img src={mailImg} alt='mailing envelope' />
    </div>
  )
}
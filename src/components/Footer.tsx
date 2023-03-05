import React from 'react';
import '../styles/Footer.css';
import linkedin from '../assets/logos/linkedin.svg';
import github from '../assets/logos/github.svg';
import email from '../assets/email.svg';
export default function Footer(){
  return(
    <div className='footer'>
      <div className='contact'>
          <div className='contact-title'>I am looking forward to working with you! I can be contacted using any of the methods below.</div>
          <div className='contact-content'>
            <a href='mailto:contact@anthonyinfortun.io'><img src={email} /></a>
            <a href='https://github.com/antinf'><img src={github} /></a>
            <a><img src={linkedin} /></a>
          </div>
      </div>
      <div className='footer-notice'>This portfolio is open source! View this page's code <a href='https://github.com/antinf/ainfortun.io'>here</a>.</div>
      <div className='footer-notice-two'>Made with ❤️ by Anthony Infortunio</div>
    </div>
  )
}
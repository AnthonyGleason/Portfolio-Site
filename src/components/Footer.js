import React from 'react';
import '../styles/footer.css';
import arrow from '../assets/arrow.svg';
export default function Footer(){
  return(
    <div className='footer'>
      <h1 className='footer-title'>Contact Me</h1>
      <p className='footer-text'>
        I look forward to reading your message!<br /> <br />
        <em className='em'>contact@anthonyinfortun.io</em>
      </p>
      <img className='arrow' src={arrow} alt='arrow that loops once and points to the right' />
    </div>
  )
}
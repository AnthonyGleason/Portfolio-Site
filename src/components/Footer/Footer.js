import React,{useEffect} from 'react';
import './Footer.css';
import ContactButtons from '../ContactButtons/ContactButtons';

export default function Footer(){
  return(
    <footer className='footer' id='footer'>
      <p className='footer-text'>
        <span>I look forward to reading your message!</span>
        <em className='em'><a className='mail' href='mailto:contact@anthonygleason.com'>contact@anthonygleason.com</a></em>
      </p>
      <ContactButtons />
    </footer>
  )
}
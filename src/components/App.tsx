import React from 'react';
import '../styles/App.css';
import greetingImg from '../assets/greeting.jpg';
export default function App(){
  return(
    <div className='app'>
      <div className='greeting'>
        <div className='greeting-text'>Hello there! My name is Anthony, I am a passionate and enthusiastic web developer with a love for FOSS.</div>
        <img className='greeting-img' src={greetingImg} />
      </div>
      <div className='about-me'>
        <div className='about-me-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt quas voluptate aut repudiandae veritatis minus pariatur molestiae soluta laudantium, iure optio iste iusto corporis sint consectetur tempore autem modi.</div>
      </div>
      <div className='skills'>
        
      </div>
      <div className='contact'>
        hello from contact
      </div>
    </div>
  )
}
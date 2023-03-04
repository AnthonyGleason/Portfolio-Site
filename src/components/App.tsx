import React from 'react';
import '../styles/App.css';
import homeImg from '../assets/home-img.jpg';
function App() {
  return (
    <div className="app">
      <div className='home'> 
        <div className='title-container'>
          <img className='home-img' alt='me' src={homeImg} />
          <div className='name'>Anthony Infortunio</div>
          <div className='title'>Web Developer</div>
        </div>
      </div>
    </div>
  );
}

export default App;

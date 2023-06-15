import React, { useEffect, useState } from 'react';
import '../styles/projects.css';
import newsweekdesktop from '../assets/projects/newsweekdesktop.png';
import wmpdesktop from '../assets/projects/wheresmypackagedesktop.png';
import appxchangedesktop from '../assets/projects/appxchange.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[])
  const slideData = [
    {
      name: "Where's My Package?",
      url: 'https://antinf.github.io/Wheres-My-Package/',
      codeUrl: 'https://github.com/antinf/Wheres-My-Package',
      desktopIMG: `url(${wmpdesktop})`,
    },
    {
      name: 'Newsweek Layout Clone',
      url:'https://antinf.github.io/Newsweek-Layout-Clone/',
      codeUrl: 'https://github.com/antinf/Newsweek-Layout-Clone',
      desktopIMG: `url(${newsweekdesktop})`,
    },
    {
      name: 'AppXchange',
      url: 'https://antinf.github.io/AppXchange/',
      codeUrl: 'https://github.com/antinf/AppXchange',
      desktopIMG: `url(${appxchangedesktop})`,
    }
  ];

  return (
    <section className='projects' id='projects'>
      <h1 data-aos='fade-right' className='projects-title'>My Projects</h1>
      <ul className='projects-slideshow'>
        {slideData.map((slide, index) => (
        <li
        data-aos="fade-right"
        className='slide-item expand'
        style={{ backgroundImage: slide.desktopIMG}}
        key={index}
        onClick={() => {window.location.href = slide.url}}
        > 
          <div className='slide-desc'>
            <p className='slide-name'>{slide.name}</p>
            <a className='slide-link' href={slide.url}>
              View Project
            </a>
            <a className='slide-link' href={slide.codeUrl}>
              View Source Code
            </a>
          </div>       
        </li>
        ))}
      </ul>
      <button
        data-aos='fade-right'
        className='view-more'
        onClick={() => {
          window.location.href = 'https://github.com/antinf?tab=repositories';
        }}
      >
        View More Projects
      </button>
    </section>
  );
}
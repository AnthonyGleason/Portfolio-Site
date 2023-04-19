import React, { useEffect, useState } from 'react';
import '../styles/projects.css';
import newsweekdesktop from '../assets/projects/newsweekdesktop.png';
import wmpdesktop from '../assets/projects/wheresmypackagedesktop.png';
import luccifitdesktop from '../assets/projects/luccifitdesktop.png';

export default function Projects() {
  const slideData = [
    {
      name: 'React.js Newsweek Clone',
      url:'https://github.com/antinf/Responsive-Newsweek-React.js-Clone',
      desktopIMG: `url(${newsweekdesktop})`,
    },
    {
      name: "Where's My Package?",
      url: 'https://github.com/antinf/Wheres-My-Package',
      desktopIMG: `url(${wmpdesktop})`,
    },
    {
      name: "Lucci Fit",
      url: 'https://luccifit.com/',
      desktopIMG: `url(${luccifitdesktop})`,
    },
  ];

  return (
    <div className='projects' id='projects'>
      <h1 className='projects-title'>My Projects</h1>
      <ul className='projects-slideshow'>
        {slideData.map((slide, index) => (
        <li
            className='slide-item expand'
            style={{ backgroundImage: slide.desktopIMG }}
            key={index}
          >        
            <p className='slide-name'>{slide.name}</p>
            <a className='slide-link' href={slide.url}>
              View Project
            </a>
          </li>
        ))}
      </ul>
      <button
        className='view-more'
        onClick={() => {
          window.location.href = 'https://www.github.com/antinf';
        }}
      >
        View More Projects
      </button>
    </div>
  );
}

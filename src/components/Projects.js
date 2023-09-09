import React, { useEffect, useState } from 'react';
import '../styles/projects.css';
import newsweekdesktop from '../assets/projects/newsweekdesktop.png';
import wmpdesktop from '../assets/projects/wheresmypackagedesktop.png';
import passninjadesktop from '../assets/projects/passninjadesktp.png';

export default function Projects() {
  const slideData = [
    {
      name: "Pass Ninja",
      url: 'https://anthonygleason.github.io/Pass-Ninja/',
      codeUrl: 'https://github.com/anthonygleason/Pass-Ninja',
      desktopIMG: `url(${passninjadesktop})`,
    },
    {
      name: "Where's My Package?",
      url: 'https://anthonygleason.github.io/Wheres-My-Package/',
      codeUrl: 'https://github.com/anthonygleason/Wheres-My-Package',
      desktopIMG: `url(${wmpdesktop})`,
    },
    {
      name: 'Newsweek Layout Clone',
      url:'https://anthonygleason.github.io/Newsweek-Layout-Clone/',
      codeUrl: 'https://github.com/anthonygleason/Newsweek-Layout-Clone',
      desktopIMG: `url(${newsweekdesktop})`,
    },
  ];

  return (
    <section className='projects' id='projects'>
      <h1 data-aos='fade-right' className='projects-title'>My Projects</h1>
      <ul className='projects-slideshow'>
        {
          slideData.map((slide, index) => (
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
                  Live Demo
                </a>
                <a className='slide-link' href={slide.codeUrl}>
                  View Source Code
                </a>
              </div>       
            </li>
          ))
        }
      </ul>
      <button
        data-aos='fade-right'
        className='view-more'
        onClick={() => {
          window.location.href = 'https://github.com/anthonygleason?tab=repositories';
        }}
      >
        View More Projects
      </button>
    </section>
  );
}
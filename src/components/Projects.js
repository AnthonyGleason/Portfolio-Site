import React, { useEffect, useState } from 'react';
import '../styles/projects.css';
import newsweekmobile from '../assets/projects/newsweekmobile.png';
import newsweekdesktop from '../assets/projects/newsweekdesktop.png';
import wmpmobile from '../assets/projects/wheresmypackagemobile.png';
import wmpdesktop from '../assets/projects/wheresmypackagedesktop.png';
export default function Projects() {
  const [slides, setSlides] = useState([0, 1, 2]);

  const slideData = [
    {
      name: 'React.js Newsweek Clone',
      url:'https://github.com/antinf/Responsive-Newsweek-React.js-Clone',
      mobileIMG : newsweekmobile,
      desktopIMG: newsweekdesktop,
    },
    {
      name: "Where's My Package?",
      url: 'https://github.com/antinf/Wheres-My-Package',
      mobileIMG : wmpmobile,
      desktopIMG: wmpdesktop,
    },
    {
      name: "Where's My Package?",
      url: 'https://github.com/antinf/Wheres-My-Package',
      mobileIMG : wmpmobile,
      desktopIMG: wmpdesktop,
    },
  ];
  useEffect(() => {
    handleSlideshow(slides, setSlides, slideData);
  },[]);
  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      handleSlideshow(slides, setSlides, slideData);
    }, 5000);
    return () => clearInterval(slideshowInterval);
  });

  return (
    <div className='projects'>
      <h1 className='projects-title'>My Projects</h1>
      <ul className='projects-slideshow'>
        <li className='prev-slide'>
          <p className='slide-name'>{slideData[slides[0]].name}</p>
          <p className='slide-desc'>{slideData[slides[0]].desc}</p>
          <a className='slide-link' href={slideData[slides[0]].url}>
            View Project
          </a>
        </li>
        <li className='current-slide'>
          <p className='slide-name'>{slideData[slides[1]].name}</p>
          <p className='slide-desc'>{slideData[slides[1]].desc}</p>
          <a className='slide-link' href={slideData[slides[1]].url}>
            View Project
          </a>
        </li>
        <li className='next-slide'>
          <p className='slide-name'>{slideData[slides[2]].name}</p>
          <p className='slide-desc'>{slideData[slides[2]].desc}</p>
          <a className='slide-link' href={slideData[slides[2]].url}>
            View Project
          </a>
        </li>
      </ul>
      <div className='slide-controls'>
        <button className='prev-button' onClick={()=>{handleSlideshowReverse(slides,setSlides,slideData)}}>Prev</button>
        <button className='next-button' onClick={()=>{handleSlideshow(slides,setSlides,slideData)}}>Next</button>
      </div>
    </div>
  );
}
function handleSlideshowReverse(slides, setSlides, slideData) {
  const lastIndex = slideData.length - 1;
  const newSlides = slides.map((slide) =>
    slide === 0 ? lastIndex : slide - 1
  );
  const prevSlide = document.querySelector('.prev-slide');
  const currentSlide = document.querySelector('.current-slide');
  const nextSlide = document.querySelector('.next-slide');
  prevSlide.style.backgroundImage = `url(${slideData[newSlides[0]].mobileIMG})`;
  currentSlide.style.backgroundImage = `url(${slideData[newSlides[1]].desktopIMG})`;
  nextSlide.style.backgroundImage = `url(${slideData[newSlides[2]].mobileIMG})`;
  setSlides(newSlides);
}
function handleSlideshow(slides, setSlides, slideData) {
  const lastIndex = slideData.length - 1;
  const newSlides = slides.map((slide) =>
    slide === lastIndex ? 0 : slide + 1
  );
  const prevSlide = document.querySelector('.prev-slide');
  const currentSlide = document.querySelector('.current-slide');
  const nextSlide = document.querySelector('.next-slide');
  prevSlide.style.backgroundImage = `url(${slideData[newSlides[0]].mobileIMG})`;
  currentSlide.style.backgroundImage = `url(${slideData[newSlides[1]].desktopIMG})`;
  nextSlide.style.backgroundImage = `url(${slideData[newSlides[2]].mobileIMG})`;
  setSlides(newSlides);
}


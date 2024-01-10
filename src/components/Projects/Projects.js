import React from 'react';
import newsWeekImg from '../../assets/projects/newsWeek.webp';
import wmpImg from '../../assets/projects/wheresMyPackage.webp';
import passNinjaImg from '../../assets/projects/passNinja.webp';
import nybcImg from '../../assets/projects/ny-bagels-club.webp';

import './Projects.css';

export default function Projects() {
  const projectData = [
    {
      name: "New York Bagels Club",
      desc: "Introducing New York Bagels Club, an e-commerce site with the goal of being your go-to spot for home deliveries of New York Bagels! New York Bagels Club features modern web design technologies and practices guaranteeing a smooth and enjoyable shopping experience.",
      url: 'https://nybagelsclub.com',
      codeUrl: 'https://github.com/AnthonyGleason/NY-Bagels-Club-Client',
      imgUrl: nybcImg,
      techStack: 'React, Typescript, Node.js, Express, Heroku, MongoDB, Framer Motion, Firebase, Stripe, Screaming Frog'
    },
    {
      name: "Where's My Package?",
      desc: "Where's My Package is a package (software) search engine for the Arch Linux distribution. This tool simplifies package discovery by enabling users to search for packages across both official and community (AUR) repositories in a unified search interface.",
      url: 'https://anthonygleason.github.io/Wheres-My-Package/',
      codeUrl: 'https://github.com/anthonygleason/Wheres-My-Package',
      imgUrl: wmpImg,
      techStack: 'React, Typescript, Node.js, Express, Heroku'
    },
    {
      name: "Pass Ninja",
      desc: "Take charge of your online security with Pass Ninja, the open-source password manager that assists you in safeguarding and managing your digital identity.",
      url: 'https://anthonygleason.github.io/Pass-Ninja/',
      codeUrl: 'https://github.com/anthonygleason/Pass-Ninja',
      imgUrl: passNinjaImg,
      techStack: 'React, Typescript, Node.js, Express, Heroku, MongoDB'
    },
    {
      name: 'Newsweek Layout Clone',
      desc: "I've challenged myself to clone and improve the layout of the popular news website Newsweek using React.js and without using any CSS frameworks. My goal was to replicate the site, but also change the layout and styling to improve the user experience.",
      url:'https://anthonygleason.github.io/Newsweek-Layout-Clone/',
      codeUrl: 'https://github.com/anthonygleason/Newsweek-Layout-Clone',
      imgUrl: newsWeekImg,
      techStack: 'React, Javascript'
    },
  ];

  return (
    <section 
      className='projects' 
      id='projects'
    >
      {/* <h1 className='projects-title'>My Projects</h1> */}
      <ol className='projects-container'>
        {
          projectData.map((project, index) => (
            <li
              className='project-item'
              key={index}
            > 
              <img 
                loading='lazy' 
                decoding='async' 
                src={project.imgUrl} 
                alt={project.name}
              />
              <article className='project-info-container'>
                <h2 className='project-name'>{project.name}</h2>
                <p className='project-desc'>
                  {project.desc}
                </p>
                <p className='project-tech-stack'>
                  Tech Stack: {project.techStack}
                </p>
                <ol>
                  <li>
                    <a className='project-url' href={project.url}>Live Demo</a>
                  </li>
                  <li>
                    <a className='project-code-url' href={project.codeUrl}>View Source Code</a>
                  </li>
                </ol>
              </article>       
            </li>
          ))
        }
      </ol>
      {/* <button
        className='view-more'
        onClick={() => {
          window.location.href = 'https://github.com/anthonygleason?tab=repositories';
        }}
      >
        View More Projects
      </button> */}
    </section>
  );
}
import React from 'react';
import newsWeekImg from '../../assets/projects/newsWeek.png';
import wmpImg from '../../assets/projects/wheresMyPackage.png';
import passNinjaImg from '../../assets/projects/passNinja.png';
import './Projects.css';

export default function Projects() {
  const projectData = [
    {
      name: "Pass Ninja",
      desc: "Take charge of your online security with Pass Ninja, the open-source password manager that assists you in safeguarding and managing your digital identity.",
      url: 'https://anthonygleason.github.io/Pass-Ninja/',
      codeUrl: 'https://github.com/anthonygleason/Pass-Ninja',
      imgUrl: passNinjaImg,
    },
    {
      name: "Where's My Package?",
      desc: "Where's My Package is a package (software) search engine for the Arch Linux distribution. This tool simplifies package discovery by enabling users to search for packages across both official and community (AUR) repositories in a unified search interface.",
      url: 'https://anthonygleason.github.io/Wheres-My-Package/',
      codeUrl: 'https://github.com/anthonygleason/Wheres-My-Package',
      imgUrl: wmpImg,
    },
    {
      name: 'Newsweek Layout Clone',
      desc: "I've challenged myself to clone and improve the layout of the popular news website Newsweek using React.js and without using any CSS frameworks. My goal was to replicate the site, but also change the layout and styling to improve the user experience.",
      url:'https://anthonygleason.github.io/Newsweek-Layout-Clone/',
      codeUrl: 'https://github.com/anthonygleason/Newsweek-Layout-Clone',
      imgUrl: newsWeekImg,
    },
  ];

  return (
    <section className='projects' id='projects'>
      <h1 data-aos='fade-right' className='projects-title'>My Projects</h1>
      <ol className='projects-container'>
        {
          projectData.map((project, index) => (
            <li
              data-aos="fade-right"
              className='project-item expand'
              key={index}
              onClick={() => {window.location.href = project.url}}
            > 
              <img src={project.imgUrl} alt={project.name} />
              <div className='project-info-container'>
                <p className='project-name'>{project.name}</p>
                <p className='project-desc'>{project.desc}</p>
                <ol>
                  <li>
                    <a className='project-url' href={project.url}>Live Demo</a>
                  </li>
                  <li>
                    <a className='project-code-url' href={project.codeUrl}>View Source Code</a>
                  </li>
                </ol>
              </div>       
            </li>
          ))
        }
      </ol>
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
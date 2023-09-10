import React from 'react';
import newsWeekImg from '../../assets/projects/newsWeek.png';
import wmpImg from '../../assets/projects/wheresMyPackage.png';
import passNinjaImg from '../../assets/projects/passNinja.png';
import './Projects.css';

export default function Projects() {
  const projectData = [
    {
      name: "Pass Ninja",
      url: 'https://anthonygleason.github.io/Pass-Ninja/',
      codeUrl: 'https://github.com/anthonygleason/Pass-Ninja',
      desktopIMG: `url(${passNinjaImg})`,
    },
    {
      name: "Where's My Package?",
      url: 'https://anthonygleason.github.io/Wheres-My-Package/',
      codeUrl: 'https://github.com/anthonygleason/Wheres-My-Package',
      desktopIMG: `url(${wmpImg})`,
    },
    {
      name: 'Newsweek Layout Clone',
      url:'https://anthonygleason.github.io/Newsweek-Layout-Clone/',
      codeUrl: 'https://github.com/anthonygleason/Newsweek-Layout-Clone',
      imgUrl: `url(${newsWeekImg})`,
    },
  ];

  return (
    <section className='projects' id='projects'>
      <h1 data-aos='fade-right' className='projects-title'>My Projects</h1>
      <ul className='projects-container'>
        {
          projectData.map((project, index) => (
            <li
              data-aos="fade-right"
              className='project-item expand'
              style={{ backgroundImage: project.imgUrl}}
              key={index}
              onClick={() => {window.location.href = project.url}}
            > 
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
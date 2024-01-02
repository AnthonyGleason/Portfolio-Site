import React from 'react';
import './Skills.css';
import { skillsArr } from '../../constants/Skills';

const getSkilListItem = function(src, alt, name,key) {
  return (
    <li key={key}>
      <img className='expand' src={src} alt={alt} />
      <span>{name}</span>
    </li>
  );
};

export default function Skills() {
  return (
    <section id='skills' className='skills' >
      <ol className='skills-container'>
        {skillsArr.map((skillItem,index) => {
          return getSkilListItem(skillItem.src, skillItem.alt, skillItem.name,index);
        })}
      </ol>
    </section>
  );
}
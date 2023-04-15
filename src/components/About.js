import React from 'react';
import '../styles/about.css';
export default function About(){
  return(
    <div className='about'>
      <h1 className='about-title'>About Me</h1>
      <p className='about-content'>
        <em className='em'>" </em> 
          Hello my name is Anthony, I am <em className='em'>passionate</em> about building high-quality software that <em className='em'>solves real-world problems</em>.
          I started my coding journey at 14 years old creating addons for the game 'Garry's Mod'. My small childhood passion
          project reached the front page of the Steam Workshop twice and currently has <em className='em'>over 50,000 current subscribers</em>.
          When I'm not coding, you can often find me playing my guitar or working on other creative projects.
          I am always <em className='em'>eager to learn</em> new skills and expand my knowledge. If you're interested in 
          collaborating on a project or just want to chat about programming, feel free to reach out!
        <em className='em'> "</em>
      </p>
    </div>
  )
}
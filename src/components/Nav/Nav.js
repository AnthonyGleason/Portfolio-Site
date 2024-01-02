import React, { useEffect, useState } from 'react';
import './Nav.css';
import xImg from '../../assets/icons/x.svg';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [viewportWidth,setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    //add the event listener
    window.addEventListener('resize', handleResize);

    //handle cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [viewportWidth]);

  if (viewportWidth>768){
    return(
      <nav className='nav-desktop'>
        <ol>
          <li>
            <a className='nav-intro' onClick={() => setIsMenuExpanded(false)} href="#intro">
              Introduction
            </a>
          </li>
          <li>
            <a className='nav-about' onClick={() => setIsMenuExpanded(false)} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className='nav-projects' onClick={() => setIsMenuExpanded(false)} href="#projects">
              My Projects
            </a>
          </li>
          <li>
            <a className='nav-skills' onClick={() => setIsMenuExpanded(false)} href="#skills">
              My Skills
            </a>
          </li>
          <li>
            <a className='nav-contact' onClick={() => setIsMenuExpanded(false)} href="#footer">
              Contact Me
            </a>
          </li>
        </ol>
      </nav>
    )
  }else{
    return (
      <AnimatePresence>
        {isMenuExpanded && (
          <motion.nav
            key="menu"
            variants={{
              closed: { x: '100%' },
              open: { x: 0 },
            }}
            initial='closed'
            transition={{
              ease: 'easeOut',
              duration: 0.25,
            }}
            animate='open'
            exit='closed'
            className='nav-open nav'
          >
            <button aria-label="Close nav menu" onClick={() => setIsMenuExpanded(false)}>
              <img src={xImg} alt='' />
            </button>
            <div className='nav-content-wrapper'>
              <ol>
                <li>
                  <a className='nav-about' onClick={() => setIsMenuExpanded(false)} href="#about">
                    About Me
                  </a>
                </li>
                <li>
                  <a className='nav-projects' onClick={() => setIsMenuExpanded(false)} href="#projects">
                    My Projects
                  </a>
                </li>
                <li>
                  <a className='nav-skills' onClick={() => setIsMenuExpanded(false)} href="#skills">
                    My Skills
                  </a>
                </li>
                <li>
                  <a className='nav-contact' onClick={() => setIsMenuExpanded(false)} href="#footer">
                    Contact Me
                  </a>
                </li>
              </ol>
            </div>
          </motion.nav>
        )}
        <nav className={`nav-closed nav`}>
          <button aria-label="Open nav menu" onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
            {/* the below image is preloaded in public/index.html */}
            <img src={'./assets/menu.svg'} alt='' /> 
          </button>
        </nav>
      </AnimatePresence>
    );
  }
}

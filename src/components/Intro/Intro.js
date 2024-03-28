import React, {useEffect,useRef,useState} from 'react';
import './Intro.css';
import { handleTypewriterEffect } from '../../helpers/helpers';

export default function Intro(){
  const emStrArr = [
    'Intuitive Web Designs.',
    'Responsive Web Designs.',
    'Accessible Web Designs.'
  ];
  const [currentEmStrState,setCurrentEmStrState] = useState('');
  const isInitialLoad = useRef(true);
  const isDeleting = useRef(false); // determines if the currentEm text is being deleted in the typewriter effect
  const currentEmArrIndex = useRef(0); // initialize the currentEmArr as empty so the effect starts from an empty text block
  const currentEmStr = useRef(''); // we are using BOTH the state and this due to issues with updating state and setInterval. Sending the prevState to the getNextEmStr() causes the direction to change 1 character early.

  // ensuring the interval is only called once by using a ref
  useEffect(()=>{
    if (isInitialLoad.current===false) return;
    //immediately set isInitialLoad to false so react strict rendering doesnt call this twice
    isInitialLoad.current=false;
    handleTypewriterEffect(
      setCurrentEmStrState,
      isDeleting,
      currentEmArrIndex,
      currentEmStr,
      emStrArr
    );
  },[]);

  return(
    <section className='intro' id='intro'>
      <div className='intro-content'>
        {/* the below image is preloaded in public/index.html */}
        <img decoding='async' data-aos='fade-in' src={'./assets/cropped.webp'} className='intro-img' alt='me' />
        <h1 className='name'>
          Anthony Infortunio
          <br />
          Software Engineer
        </h1>
        <h2>
          Elevating Your Ideas Into
          <br />
          <em className='em'>{currentEmStrState}</em>|
        </h2>
      </div>
    </section>
  )
};
import React, { useState, useEffect, useContext, useRef } from 'react';
import ScrollContext from 'context/ScrollContext';
import { Wrapper } from './SecondSection.styles';

const SecondSection: React.FC = () => {
  const [isHighlighted, setIsHighlighted] = useState<number>(0);

  const { isSticky } = useContext(ScrollContext);

  useEffect(() => {
    document.querySelectorAll('.spans').forEach((item, index) => {
      if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
        setIsHighlighted(index);
      }
    });
  }, [isSticky]);

  return (
    <Wrapper $isHighlighted={isHighlighted}>
      <video autoPlay loop muted playsInline preload='auto' height='1100' width='1440'>
        <source src='/images/section2.mp4' type='video/mp4' />
      </video>

      <div>
        <span className='spans'>A dramatically more powerful camera system. </span>
        <span className='spans'>A display so responsive, every interaction feels new again. </span>
        <span className='spans'>The world’s fastest smartphone chip. </span>
        <span className='spans'>Exceptional durability. </span>
        <span className='spans'>And a huge leap in battery life. </span>
        <span className='spans'>
          Let’s Pro.
          <p>From £39.54/mo. or £949 before trade‑in*</p>
          <p>Watch the film Watch the event</p>
        </span>
      </div>
    </Wrapper>
  );
};

export default React.memo(SecondSection);

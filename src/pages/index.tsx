import type { NextPage } from 'next';
import { useContext, useEffect, useState, useRef } from 'react';

import HeadComponent from 'components/Head/Head';
import ScrollContext from 'context/ScrollContext';
import {
  FirstSection,
  FourthSection,
  SecondSection,
  StyledFirstVideo,
  ThirdFooter,
  ThirdInner,
  ThirdLeft,
  ThirdRight,
  ThirdSection,
  Wrapper,
} from 'styles/index/index.styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: NextPage = () => {
  const [isHighlighted, setIsHighlighted] = useState<number>(0);

  const { isSticky } = useContext(ScrollContext);

  const tl = useRef(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-height: 820px) and (min-width: 768px)');

    if (mediaQuery.matches && firstSectionRef.current && thirdSectionRef.current) {
      const refTable = [thirdSectionRef, firstSectionRef];
      refTable.forEach((ref) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      });
    }
  }, [firstSectionRef, thirdSectionRef]);

  useEffect(() => {
    document.querySelectorAll('.spans').forEach((item, index) => {
      if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
        setIsHighlighted(index);
      }
    });
  }, [isSticky]);

  return (
    <Wrapper>
      <HeadComponent title='Apple effects clone' />

      <FirstSection ref={firstSectionRef}>
        <StyledFirstVideo>
          <header>
            <h1>iPhone 13 Pro</h1>
            <div>
              <p>iPhone 13 Pro</p>
              <h2>Every inch a pro.</h2>
            </div>
          </header>

          <video autoPlay muted playsInline preload='auto'>
            <source src='/images/medium.mp4' type='video/mp4' />
          </video>
        </StyledFirstVideo>
      </FirstSection>

      <SecondSection $isHighlighted={isHighlighted}>
        <video autoPlay loop muted playsInline preload='auto'>
          <source src='/images/section2.mp4' type='video/mp4' />
        </video>

        <div>
          <span className='spans'>A dramatically more powerful camera system. </span>
          <span className='spans'>
            A display so responsive, every interaction feels new again.{' '}
          </span>
          <span className='spans'>The world’s fastest smartphone chip. </span>
          <span className='spans'>Exceptional durability. </span>
          <span className='spans'>And a huge leap in battery life. </span>
          <span className='spans'>
            Let’s Pro.
            <p>From £39.54/mo. or £949 before trade‑in*</p>
            <p>Watch the film Watch the event</p>
          </span>
        </div>
      </SecondSection>

      <ThirdSection ref={thirdSectionRef}>
        <ThirdInner>
          <ThirdLeft>
            <h2>
              iPhone 13 Pro Max
              <span>6.7”</span>
            </h2>
            <img src='/images/section2_2.png' alt='' /> {/* 321 x 650 */}
          </ThirdLeft>
          <ThirdRight>
            <h2>
              iPhone 13 Pro
              <span>6.1”</span>
            </h2>
            <img src='/images/section2_1.png' alt='' /> {/* 292 x 588 */}
          </ThirdRight>
        </ThirdInner>
        <ThirdFooter>Super Retina XDR display1 with ProMotion</ThirdFooter>
      </ThirdSection>

      <FourthSection>test2</FourthSection>
    </Wrapper>
  );
};

export default Home;

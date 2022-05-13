import type { NextPage } from 'next';
import { useContext, useRef, useEffect, useState } from 'react';
import HeadComponent from 'components/Head/Head';
import {
  FirstSection,
  SecondSection,
  StyledFirstVideo,
  ThirdSection,
  Wrapper,
} from 'assets/styles/index/index.styles';
import ScrollContext from 'context/ScrollContext';

const Home: NextPage = () => {
  const { isSticky } = useContext(ScrollContext);

  const secondSectionRef = useRef<HTMLDivElement>(null);
  console.log(secondSectionRef.current?.scrollHeight, isSticky);

  return (
    <Wrapper>
      <HeadComponent title='Apple effects clone' />

      <FirstSection $isSticky={isSticky}>
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

      <SecondSection ref={secondSectionRef}>
        <video autoPlay loop muted playsInline preload='auto'>
          <source src='/images/section2.mp4' type='video/mp4' />
        </video>

        <div>
          <span>A dramatically more powerful camera system. </span>
          <span>A display so responsive, every interaction feels new again. </span>
          <span>The world’s fastest smartphone chip. </span>
          <span>Exceptional durability. </span>
          <span>And a huge leap in battery life. </span>
          <span>
            Let’s Pro.
            <p>From £39.54/mo. or £949 before trade‑in*</p>
            <p>Watch the film Watch the event</p>
          </span>
        </div>
      </SecondSection>

      <ThirdSection></ThirdSection>
    </Wrapper>
  );
};

export default Home;

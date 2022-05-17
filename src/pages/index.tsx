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

  const firstSectionRef = useRef<HTMLDivElement>(null);

  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const tSectLeftH2 = useRef<HTMLDivElement>(null);
  const tSectLeftImg = useRef<HTMLImageElement>(null);
  const tSectRightH2 = useRef<HTMLDivElement>(null);
  const tSectRightImg = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mediaQueryFixed = window.matchMedia('(min-height: 820px) and (min-width: 768px)');
    const mediaQueryAnimations = window.matchMedia('(min-width: 768px)');

    if (mediaQueryFixed.matches && firstSectionRef.current && thirdSectionRef.current) {
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

    if (
      mediaQueryAnimations.matches &&
      thirdSectionRef.current &&
      tSectLeftImg.current &&
      tSectRightImg.current
    ) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: thirdSectionRef.current,
            start: '20% bottom',
            end: '45% 45%',
            scrub: true,
          },
        })
        .to(tSectLeftImg.current, { x: -60 }, 0)
        .to(tSectLeftH2.current, { x: -200, opacity: 1 }, 0)
        .to(tSectRightImg.current, { x: 60 }, 0)
        .to(tSectRightH2.current, { x: 200, opacity: 1 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: thirdSectionRef.current,
            start: '60% 60%',
            scrub: true,
          },
        })
        .to(tSectLeftImg.current, { x: 0 }, 0)
        .to(tSectLeftH2.current, { x: 0, opacity: 0 }, 0)
        .to(tSectRightImg.current, { x: 0 }, 0)
        .to(tSectRightH2.current, { x: 0, opacity: 0 }, 0);
    }
  }, [firstSectionRef, thirdSectionRef, tSectLeftImg]);

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
            <h2 ref={tSectLeftH2}>
              iPhone 13 Pro Max
              <span>6.7”</span>
            </h2>
            <img ref={tSectLeftImg} src='/images/section2_2.png' alt='iPhone 13 Pro Max 6.7”' />
          </ThirdLeft>
          <ThirdRight>
            <h2 ref={tSectRightH2}>
              iPhone 13 Pro
              <span>6.1”</span>
            </h2>
            <img ref={tSectRightImg} src='/images/section2_1.png' alt='iPhone 13 Pro 6.1”' />
          </ThirdRight>
        </ThirdInner>
        <ThirdFooter>Super Retina XDR display1 with ProMotion</ThirdFooter>
      </ThirdSection>

      <FourthSection>
        <div>1</div>
        <div>2</div>

        <div>3</div>
        <div>4</div>

        <div>5</div>
        <div>6</div>
      </FourthSection>
    </Wrapper>
  );
};

export default Home;

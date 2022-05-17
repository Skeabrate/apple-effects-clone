import type { NextPage } from 'next';
import { useContext, useEffect, useState, useRef } from 'react';
import HeadComponent from 'components/Head/Head';
import ScrollContext from 'context/ScrollContext';
import ImageSlider from 'components/ImageSlider/ImageSlider';
import {
  FifthSection,
  FirstSection,
  FourthInner,
  FourthSection,
  FourtInnerDiv,
  SecondSection,
  SixthSection,
  StyledFirstVideo,
  ThirdInner,
  ThirdLeft,
  ThirdRight,
  ThirdSection,
  Wrapper,
} from 'styles/index/index.styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { StyledH3 } from 'styles/GlobalStyledComponents.styles';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: NextPage = () => {
  const [isHighlighted, setIsHighlighted] = useState<number>(0);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const { isSticky } = useContext(ScrollContext);

  const firstSectionRef = useRef<HTMLDivElement>(null);

  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const tSectLeftH2Ref = useRef<HTMLDivElement>(null);
  const tSectLeftImgRef = useRef<HTMLImageElement>(null);
  const tSectRightH2Ref = useRef<HTMLDivElement>(null);
  const tSectRightImgRef = useRef<HTMLImageElement>(null);

  const fourthSectVideoRef = useRef<HTMLVideoElement>(null);
  const fourthSectionFirstRef = useRef<HTMLDivElement>(null);
  const fourthSectionSecondRef = useRef<HTMLDivElement>(null);
  const fourthSectionThirdRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQueryFixed = window.matchMedia('(min-height: 820px) and (min-width: 768px)');
    const mediaQueryAnimations = window.matchMedia('(min-width: 768px)');

    /* Sticky Backgound */
    if (
      mediaQueryFixed.matches &&
      firstSectionRef.current &&
      thirdSectionRef.current &&
      fourthSectionFirstRef.current &&
      fourthSectionSecondRef.current &&
      fourthSectionThirdRef.current
    ) {
      const refTable = [
        thirdSectionRef,
        firstSectionRef,
        fourthSectionFirstRef,
        fourthSectionSecondRef,
        fourthSectionThirdRef,
      ];
      refTable.forEach((ref) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      });
    }

    /* Third section animations */
    if (
      mediaQueryAnimations.matches &&
      thirdSectionRef.current &&
      tSectLeftImgRef.current &&
      tSectRightImgRef.current
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
        .to(tSectLeftImgRef.current, { x: -60 }, 0)
        .to(tSectLeftH2Ref.current, { x: -200, opacity: 1 }, 0)
        .to(tSectRightImgRef.current, { x: 60 }, 0)
        .to(tSectRightH2Ref.current, { x: 200, opacity: 1 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: thirdSectionRef.current,
            start: '60% 65%',
            scrub: true,
          },
        })
        .to(tSectLeftImgRef.current, { x: 0 }, 0)
        .to(tSectLeftH2Ref.current, { x: 0, opacity: 0 }, 0)
        .to(tSectRightImgRef.current, { x: 0 }, 0)
        .to(tSectRightH2Ref.current, { x: 0, opacity: 0 }, 0);
    }

    /* Fourth section video start on scroll */
    if (fourthSectVideoRef.current) {
      ScrollTrigger.create({
        trigger: fourthSectVideoRef.current,
        start: 'top center',
        onEnter: () => fourthSectVideoRef.current && fourthSectVideoRef.current.play(),
      });
    }

    /* if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          // trigger: fourthSectionFirstRef.current,
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true,
        },
      });
    } */
  }, [
    firstSectionRef,
    thirdSectionRef,
    tSectLeftImgRef,
    tSectLeftH2Ref,
    tSectRightH2Ref,
    tSectRightImgRef,
    fourthSectVideoRef,
    fourthSectionFirstRef,
    fourthSectionSecondRef,
    fourthSectionThirdRef,
  ]);

  useEffect(() => {
    /* Second section highlited items */
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
            <h2 ref={tSectLeftH2Ref}>
              iPhone 13 Pro Max
              <span>6.7”</span>
            </h2>
            <img ref={tSectLeftImgRef} src='/images/section2_2.png' alt='iPhone 13 Pro Max 6.7”' />
          </ThirdLeft>
          <ThirdRight>
            <h2 ref={tSectRightH2Ref}>
              iPhone 13 Pro
              <span>6.1”</span>
            </h2>
            <img ref={tSectRightImgRef} src='/images/section2_1.png' alt='iPhone 13 Pro 6.1”' />
          </ThirdRight>
        </ThirdInner>
        <StyledH3>Super Retina XDR display1 with ProMotion</StyledH3>
      </ThirdSection>

      <FourthSection>
        <FourthInner ref={fourthSectionFirstRef} $sliderIndex={sliderIndex}>
          <FourtInnerDiv>
            <div ref={sliderRef} style={{ width: '100%', height: '100%' }}>
              <ImageSlider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
            </div>
          </FourtInnerDiv>

          <FourtInnerDiv>
            <img src='/images/green-huge.jpg' alt='' aria-hidden='true' />
            <img src='/images/silver-huge.jpg' alt='' aria-hidden='true' />
            <img src='/images/gold-huge.jpg' alt='' aria-hidden='true' />
            <img src='/images/black-huge.jpg' alt='' aria-hidden='true' />
            <img src='/images/blue-huge.jpg' alt='' aria-hidden='true' />
          </FourtInnerDiv>
        </FourthInner>

        <FourthInner ref={fourthSectionSecondRef}>
          <FourtInnerDiv>
            <img
              src='/images/stainless_steel_2_static__bh174dfhj9te_large.jpg'
              alt='Surgical-grade stainless steel'
            />
            <StyledH3>
              Surgical-grade <span>stainless steel</span>
            </StyledH3>
          </FourtInnerDiv>

          <FourtInnerDiv>
            <img
              src='/images/stainless_steel_1_static__bys3zwk8iieu_large.jpg'
              alt=''
              aria-hidden='true'
            />
          </FourtInnerDiv>
        </FourthInner>

        <FourthInner ref={fourthSectionThirdRef}>
          <FourtInnerDiv>
            <img
              src='/images/ceramic_shield_1_static__ci68bor3yn6u_large.jpg'
              alt='Ceramic Shield, tougher than any smartphone glass'
            />
            <StyledH3>
              Ceramic Shield, tougher than <span>any smartphone glass</span>
            </StyledH3>
          </FourtInnerDiv>

          <FourtInnerDiv>
            <video ref={fourthSectVideoRef} muted playsInline preload='auto'>
              <source src='/images/fourthSectionMovie.mp4' type='video/mp4' />
            </video>
          </FourtInnerDiv>
        </FourthInner>
      </FourthSection>

      <FifthSection>
        <img src='/images/water_resistant__ddhg6jxs53yq_large.jpg' width='884' height='1394' />

        <StyledH3>
          Industry-leading IP68 <span>water resistance&#178;</span>
        </StyledH3>
      </FifthSection>

      <SixthSection></SixthSection>
    </Wrapper>
  );
};

export default Home;

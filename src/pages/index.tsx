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
  FourtInnerFirstDiv,
  FourtInnerSecondDiv,
  FourtInnerThirdDiv,
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

  const firstSectRef = useRef<HTMLDivElement>(null);

  /* Third Section */
  const thirdSectRef = useRef<HTMLDivElement>(null);
  const thirdSectLeftH2Ref = useRef<HTMLDivElement>(null);
  const thirdSectLeftImgRef = useRef<HTMLImageElement>(null);
  const thirdSectRightH2Ref = useRef<HTMLDivElement>(null);
  const thirdSectRightImgRef = useRef<HTMLImageElement>(null);

  /* Fourth Section */
  const fourthSectFirstRef = useRef<HTMLDivElement>(null);
  const fourthSectFirstLeftRef = useRef<HTMLDivElement>(null);
  const fourthSectFirstRightRef = useRef<HTMLDivElement>(null);

  const fourthSectSecondRef = useRef<HTMLDivElement>(null);
  const fourthSectSecondLeftRef = useRef<HTMLImageElement>(null);
  const fourthSectSecondRightRef = useRef<HTMLDivElement>(null);

  const fourthSectThirdRef = useRef<HTMLDivElement>(null);
  const fourthSectThirdLeftRef = useRef<HTMLDivElement>(null);
  const fourthSectThirdRightRef = useRef<HTMLVideoElement>(null);

  /* Fifth Section */
  const fifthSectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mqFixed = window.matchMedia('(min-height: 820px) and (min-width: 768px)');
    const mqThirdSection = window.matchMedia('(min-width: 768px)');
    const mqFourthSection = window.matchMedia('(min-height: 670px) and (min-width: 768px)');

    /* Sticky Backgounds */
    if (mqFixed.matches && firstSectRef.current && thirdSectRef.current) {
      const refTable = [thirdSectRef, firstSectRef];

      refTable.forEach((ref) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      });
    }

    /* Third section */
    if (
      mqThirdSection.matches &&
      thirdSectRef.current &&
      thirdSectLeftImgRef.current &&
      thirdSectRightImgRef.current &&
      thirdSectRightH2Ref.current &&
      thirdSectLeftH2Ref.current
    ) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: thirdSectRef.current,
            start: '20% bottom',
            end: '45% 45%',
            scrub: true,
          },
        })
        .to(thirdSectLeftImgRef.current, { x: -60 }, 0)
        .to(thirdSectLeftH2Ref.current, { x: -200, opacity: 1 }, 0)
        .to(thirdSectRightImgRef.current, { x: 60 }, 0)
        .to(thirdSectRightH2Ref.current, { x: 200, opacity: 1 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: thirdSectRef.current,
            start: '60% 65%',
            scrub: true,
          },
        })
        .to(thirdSectLeftImgRef.current, { x: 0 }, 0)
        .to(thirdSectLeftH2Ref.current, { x: 0, opacity: 0 }, 0)
        .to(thirdSectRightImgRef.current, { x: 0 }, 0)
        .to(thirdSectRightH2Ref.current, { x: 0, opacity: 0 }, 0);
    }

    /* Fourth section */
    if (
      mqFourthSection.matches &&
      fourthSectFirstRef.current &&
      fourthSectSecondRef.current &&
      fourthSectThirdRef.current &&
      fourthSectFirstRightRef.current &&
      fourthSectSecondLeftRef.current &&
      fourthSectThirdRightRef.current &&
      fifthSectRef.current
    ) {
      const refTable = [fourthSectFirstRef, fourthSectSecondRef, fourthSectThirdRef];
      const paralaxRefTable = [
        {
          to: fourthSectFirstRightRef,
          trigger: fourthSectSecondRef,
        },
        {
          to: fourthSectSecondLeftRef,
          trigger: fourthSectThirdRef,
        },
        {
          to: fourthSectThirdRightRef,
          trigger: fifthSectRef,
        },
      ];

      refTable.forEach((ref) => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top top',
          pin: true,
          end: '+=200%',
          pinSpacing: false,
        });
      });

      paralaxRefTable.forEach(({ to, trigger }) => {
        gsap.to(to.current, {
          yPercent: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: trigger.current,
            start: '0% bottom',
            scrub: true,
          },
        });
      });
    }

    /* Fourth section video start when in view */
    if (fourthSectThirdRightRef.current) {
      ScrollTrigger.create({
        trigger: fourthSectThirdRightRef.current,
        start: 'top center',
        onEnter: () => fourthSectThirdRightRef.current && fourthSectThirdRightRef.current.play(),
      });
    }
  }, [
    firstSectRef,
    thirdSectRef,
    thirdSectLeftH2Ref,
    thirdSectLeftImgRef,
    thirdSectRightH2Ref,
    thirdSectRightImgRef,
    fourthSectFirstRef,
    fourthSectFirstLeftRef,
    fourthSectFirstRightRef,
    fourthSectSecondRef,
    fourthSectSecondLeftRef,
    fourthSectSecondRightRef,
    fourthSectThirdRef,
    fourthSectThirdLeftRef,
    fourthSectThirdRightRef,
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

      <FirstSection ref={firstSectRef}>
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

      <ThirdSection ref={thirdSectRef}>
        <ThirdInner>
          <ThirdLeft>
            <h2 ref={thirdSectLeftH2Ref}>
              iPhone 13 Pro Max
              <span>6.7”</span>
            </h2>
            <img
              ref={thirdSectLeftImgRef}
              src='/images/section2_2.png'
              alt='iPhone 13 Pro Max 6.7”'
            />
          </ThirdLeft>
          <ThirdRight>
            <h2 ref={thirdSectRightH2Ref}>
              iPhone 13 Pro
              <span>6.1”</span>
            </h2>
            <img ref={thirdSectRightImgRef} src='/images/section2_1.png' alt='iPhone 13 Pro 6.1”' />
          </ThirdRight>
        </ThirdInner>
        <StyledH3>Super Retina XDR display1 with ProMotion</StyledH3>
      </ThirdSection>

      <FourthSection>
        <FourthInner ref={fourthSectFirstRef} $sliderIndex={sliderIndex}>
          <FourtInnerFirstDiv>
            <ImageSlider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
          </FourtInnerFirstDiv>

          <FourtInnerFirstDiv $sliderIndex={sliderIndex}>
            <div ref={fourthSectFirstRightRef}>
              <img src='/images/green-huge.jpg' alt='' aria-hidden='true' />
              <img src='/images/silver-huge.jpg' alt='' aria-hidden='true' />
              <img src='/images/gold-huge.jpg' alt='' aria-hidden='true' />
              <img src='/images/black-huge.jpg' alt='' aria-hidden='true' />
              <img src='/images/blue-huge.jpg' alt='' aria-hidden='true' />
            </div>
          </FourtInnerFirstDiv>
        </FourthInner>

        <FourthInner ref={fourthSectSecondRef}>
          <FourtInnerSecondDiv>
            <img
              src='/images/stainless_steel_2_static__bh174dfhj9te_large.jpg'
              alt='Surgical-grade stainless steel'
            />
            <StyledH3>
              Surgical-grade <span>stainless steel</span>
            </StyledH3>
          </FourtInnerSecondDiv>

          <FourtInnerSecondDiv>
            <img
              src='/images/stainless_steel_1_static__bys3zwk8iieu_large.jpg'
              alt=''
              aria-hidden='true'
              ref={fourthSectSecondLeftRef}
            />
          </FourtInnerSecondDiv>
        </FourthInner>

        <FourthInner ref={fourthSectThirdRef}>
          <FourtInnerThirdDiv>
            <img
              src='/images/ceramic_shield_1_static__ci68bor3yn6u_large.jpg'
              alt='Ceramic Shield, tougher than any smartphone glass'
            />
            <StyledH3>
              Ceramic Shield, tougher than <span>any smartphone glass</span>
            </StyledH3>
          </FourtInnerThirdDiv>

          <FourtInnerThirdDiv>
            <video ref={fourthSectThirdRightRef} muted playsInline preload='auto'>
              <source src='/images/fourthSectionMovie.mp4' type='video/mp4' />
            </video>
          </FourtInnerThirdDiv>
        </FourthInner>
      </FourthSection>

      <FifthSection ref={fifthSectRef}>
        <img
          src='/images/water_resistant__ddhg6jxs53yq_large.jpg'
          alt='Industry-leading IP68 water resistance'
          width='884'
          height='1394'
        />

        <StyledH3>
          Industry-leading IP68 <span>water resistance&#178;</span>
        </StyledH3>
      </FifthSection>

      <SixthSection></SixthSection>
    </Wrapper>
  );
};

export default Home;

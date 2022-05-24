import type { NextPage } from 'next';
import Image from 'next/image';
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
  SixthSectionHelperUp,
  SixthSectionHelperDown,
  SixthSectionImg,
  SixthSectionText,
  StyledFirstVideo,
  ThirdInner,
  ThirdLeft,
  ThirdRight,
  ThirdSection,
  Wrapper,
  SeventhSection,
  EightSection,
} from 'styles/index/index.styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { StyledH3 } from 'styles/GlobalStyledComponents.styles';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface sixthSectParalaxType {
  isActive: boolean;
  isOnTop: boolean;
}

const Home: NextPage = () => {
  const [isHighlighted, setIsHighlighted] = useState<number>(0);
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [sixthSectParalax, setSixthSectParalax] = useState<sixthSectParalaxType>({
    isActive: false,
    isOnTop: true,
  });

  const { isSticky } = useContext(ScrollContext);

  /* First Section */
  const firstSectHeaderRef = useRef<HTMLDivElement>(null);
  const firstSectDivRef = useRef<HTMLDivElement>(null);
  const firstSectRef = useRef<HTMLDivElement>(null);
  const firstSectVidRef = useRef<HTMLVideoElement>(null);

  /* Third Section */
  const thirdSectRef = useRef<HTMLDivElement>(null);
  const thirdSectLeftH2Ref = useRef<HTMLDivElement>(null);
  const thirdSectLeftImgRef = useRef<HTMLDivElement>(null);
  const thirdSectRightH2Ref = useRef<HTMLDivElement>(null);
  const thirdSectRightImgRef = useRef<HTMLDivElement>(null);

  /* Fourth Section */
  const fourthSectFirstRef = useRef<HTMLDivElement>(null);
  const fourthSectFirstRightRef = useRef<HTMLDivElement>(null);

  const fourthSectSecondRef = useRef<HTMLDivElement>(null);
  const fourthSectSecondLeftRef = useRef<HTMLImageElement>(null);
  const fourthSectSecondRightRef = useRef<HTMLImageElement>(null);

  const fourthSectThirdRef = useRef<HTMLDivElement>(null);
  const fourthSectThirdLeftRef = useRef<HTMLImageElement>(null);
  const fourthSectThirdRightRef = useRef<HTMLVideoElement>(null);

  /* Fifth Section */
  const fifthSectRef = useRef<HTMLDivElement>(null);

  /* Sixth Section */
  const sixthSectionHelperUpRef = useRef<HTMLDivElement>(null);
  const sixthSectionHelperDownRef = useRef<HTMLDivElement>(null);
  const sixthSectionImageRef = useRef<HTMLDivElement>(null);

  /* Seventh Section */
  const seventhSectVideoRef = useRef<HTMLVideoElement>(null);
  const seventhSectFirstRef = useRef<HTMLDivElement>(null);
  const seventhSectSecondRef = useRef<HTMLDivElement>(null);

  /* Animations */
  useEffect(() => {
    /* First Section */
    if (firstSectVidRef.current) {
      firstSectVidRef.current.addEventListener('playing', () => {
        if (firstSectVidRef?.current?.readyState == 4) {
          setIsVideoLoaded(true);
        }
      });
      firstSectVidRef.current.addEventListener('suspend', () => {
        if (firstSectVidRef?.current?.readyState == 4) {
          setIsVideoLoaded(true);
        }
      });
    }

    return () => {
      if (firstSectVidRef.current) {
        firstSectVidRef.current.removeEventListener('loadeddata', () => {});
        firstSectVidRef.current.removeEventListener('suspend', () => {});
      }
    };
  }, [firstSectVidRef]);

  useEffect(() => {
    /* First Section */
    if (firstSectHeaderRef.current && firstSectDivRef.current) {
      let tl = gsap.timeline({ paused: !isVideoLoaded });

      tl.to(firstSectHeaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1.5,
      }).to(firstSectDivRef.current, {
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
      });
    }
  }, [isVideoLoaded, firstSectHeaderRef, firstSectDivRef]);

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
      thirdSectLeftH2Ref.current &&
      fourthSectFirstRef.current
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
            trigger: fourthSectFirstRef.current,
            start: '15% bottom',
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
      fourthSectSecondLeftRef.current &&
      fourthSectSecondRightRef.current &&
      fourthSectThirdRef.current &&
      fourthSectThirdRightRef.current &&
      fifthSectRef.current
    ) {
      const refTable = [fourthSectFirstRef, fourthSectSecondRef, fourthSectThirdRef];
      const paralaxBigTable = [
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
      const paralaxSmallTable = [
        {
          to: fourthSectSecondRightRef,
          trigger: fourthSectThirdRef,
        },
        {
          to: fourthSectThirdLeftRef,
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

      paralaxBigTable.forEach(({ to, trigger }) => {
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

      paralaxSmallTable.forEach(({ to, trigger }) => {
        gsap.to(to.current, {
          yPercent: -60,
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

    /* Sixth section */
    if (sixthSectionHelperUpRef.current && sixthSectionImageRef.current) {
      gsap.to(sixthSectionImageRef.current, {
        scrollTrigger: {
          trigger: sixthSectionHelperUpRef.current,
          scrub: true,
          start: '0% bottom',
          end: '100% bottom',
        },
        y: '-10%',
      });
    }

    /* Seventh section video */
    if (seventhSectVideoRef.current) {
      ScrollTrigger.create({
        trigger: seventhSectVideoRef.current,
        start: 'top center',
        onEnter: () => seventhSectVideoRef.current && seventhSectVideoRef.current.play(),
      });
    }

    if (seventhSectFirstRef.current && seventhSectSecondRef.current) {
      const paralaxTable = [seventhSectFirstRef.current, seventhSectSecondRef.current];
      paralaxTable.forEach((item) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: '40% bottom',
              end: 'bottom bottom',
              scrub: true,
            },
          })
          .to(item, { y: 0, opacity: 1 }, 0);
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
    fourthSectFirstRightRef,
    fourthSectSecondRef,
    fourthSectSecondLeftRef,
    fourthSectSecondRightRef,
    fourthSectThirdRef,
    fourthSectThirdLeftRef,
    fourthSectThirdRightRef,
    sixthSectionHelperUpRef,
    sixthSectionImageRef,
  ]);

  useEffect(() => {
    /* Second section */
    document.querySelectorAll('.spans').forEach((item, index) => {
      if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
        setIsHighlighted(index);
      }
    });

    /* Sixth section */
    if (sixthSectionHelperUpRef.current && sixthSectionHelperDownRef.current) {
      if (
        sixthSectionHelperUpRef.current.getBoundingClientRect().top <= window.innerHeight &&
        sixthSectionHelperDownRef.current.getBoundingClientRect().top >= window.innerHeight
      ) {
        setSixthSectParalax((state) => ({
          ...state,
          isActive: true,
        }));
      } else if (
        sixthSectionHelperUpRef.current.getBoundingClientRect().top >= window.innerHeight
      ) {
        setSixthSectParalax({
          isActive: false,
          isOnTop: true,
        });
      } else if (
        sixthSectionHelperDownRef.current.getBoundingClientRect().top <= window.innerHeight
      ) {
        setSixthSectParalax({
          isActive: false,
          isOnTop: false,
        });
      }
    }
  }, [isSticky, sixthSectionHelperUpRef, sixthSectionHelperDownRef, sixthSectionImageRef]);

  return (
    <Wrapper>
      <HeadComponent title='Apple effects clone' />

      <FirstSection ref={firstSectRef}>
        <StyledFirstVideo $isVideoLoaded={isVideoLoaded}>
          <header>
            <h1 ref={firstSectHeaderRef}>iPhone 13 Pro</h1>
            <div ref={firstSectDivRef}>
              <p>iPhone 13 Pro</p>
              <h2>Oh. So. Pro.</h2>
            </div>
          </header>

          <video ref={firstSectVidRef} autoPlay muted playsInline preload='auto'>
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
            <div ref={thirdSectLeftImgRef}>
              <Image
                src='/images/section2_2.png'
                alt='iPhone 13 Pro Max 6.7”'
                height='650'
                width='321'
                layout='intrinsic'
              />
            </div>
          </ThirdLeft>
          <ThirdRight>
            <h2 ref={thirdSectRightH2Ref}>
              iPhone 13 Pro
              <span>6.1”</span>
            </h2>
            <div ref={thirdSectRightImgRef}>
              <Image
                src='/images/section2_1.png'
                alt='iPhone 13 Pro 6.1”'
                height='588'
                width='292'
              />
            </div>
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
              <img
                width='1042'
                height='935'
                src='/images/green-huge.jpg'
                alt=''
                aria-hidden='true'
              />
              <img
                width='1042'
                height='935'
                src='/images/silver-huge.jpg'
                alt=''
                aria-hidden='true'
              />
              <img
                width='1042'
                height='935'
                src='/images/gold-huge.jpg'
                alt=''
                aria-hidden='true'
              />
              <img
                width='1042'
                height='935'
                src='/images/black-huge.jpg'
                alt=''
                aria-hidden='true'
              />
              <img
                width='1042'
                height='935'
                src='/images/blue-huge.jpg'
                alt=''
                aria-hidden='true'
              />
            </div>
          </FourtInnerFirstDiv>
        </FourthInner>

        <FourthInner ref={fourthSectSecondRef}>
          <FourtInnerSecondDiv>
            <div>
              <img
                src='/images/stainless_steel_2_static__bh174dfhj9te_large.jpg'
                alt='Surgical-grade stainless steel'
                ref={fourthSectSecondRightRef}
                height='657'
                width='53'
              />
            </div>
            <StyledH3>
              Surgical-grade <span>stainless steel</span>
            </StyledH3>
          </FourtInnerSecondDiv>

          <FourtInnerSecondDiv>
            <img
              src='/images/stainless_steel_1_static__bys3zwk8iieu_large.jpg'
              alt=''
              aria-hidden='true'
              height='960'
              width='201'
              ref={fourthSectSecondLeftRef}
            />
          </FourtInnerSecondDiv>
        </FourthInner>

        <FourthInner ref={fourthSectThirdRef}>
          <FourtInnerThirdDiv>
            <div>
              <img
                src='/images/ceramic_shield_1_static__ci68bor3yn6u_large.jpg'
                alt='Ceramic Shield, tougher than any smartphone glass'
                ref={fourthSectThirdLeftRef}
                height='543'
                width='270'
              />
            </div>
            <StyledH3>
              Ceramic Shield, tougher than <span>any smartphone glass</span>
            </StyledH3>
          </FourtInnerThirdDiv>

          <FourtInnerThirdDiv>
            <video
              height='866'
              width='652'
              ref={fourthSectThirdRightRef}
              muted
              playsInline
              preload='auto'
            >
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

      <SixthSection>
        <SixthSectionHelperUp ref={sixthSectionHelperUpRef} />
        <SixthSectionImg
          ref={sixthSectionImageRef}
          $sixthSectParalaxIsActive={sixthSectParalax.isActive}
          $sixthSectParalaxIsOnTop={sixthSectParalax.isOnTop}
        >
          <img src='/images/SixthSection.png' alt='Pro camera system' />
        </SixthSectionImg>
        <SixthSectionText>
          Our <span>Pro camera system</span> gets its biggest upgrade ever. With{' '}
          <span>next-level hardware</span> that captures so much more detail.{' '}
          <span>Super-intelligent software</span> for new photo and filmmaking techniques. And a{' '}
          <span>mind-blowingly fast chip</span> that makes it all possible.{' '}
          <span>It’ll change the way you shoot.</span>
        </SixthSectionText>
        <SixthSectionHelperDown ref={sixthSectionHelperDownRef} />
      </SixthSection>

      <SeventhSection>
        <div>
          <Image
            src='/images/macro_photography__e2abtsqe82c2_large.jpg'
            height='1019'
            width='1358'
          />
        </div>

        <div>
          <h2>Whoa.</h2>

          <div style={{ opacity: 0, transform: 'translateY(40px)' }} ref={seventhSectFirstRef}>
            <h3>Macro photography comes to iPhone.</h3>
            <p>
              With its redesigned lens and powerful autofocus system, the new Ultra Wide camera can
              focus at just 2cm — making even the smallest details seem epic. Transform a leaf into
              abstract art. Capture a caterpillar’s fuzz. Magnify a dewdrop. The beauty of tiny
              awaits.
            </p>
          </div>
        </div>

        <video height='768' width='1358' ref={seventhSectVideoRef} muted playsInline preload='auto'>
          <source src='/images/seventh.mp4' type='video/mp4' />
        </video>

        <div style={{ opacity: 0, transform: 'translateY(40px)' }} ref={seventhSectSecondRef}>
          <h3>Macro video, anyone?</h3>
          <p>
            Macro stills are just the beginning. You can also shoot macro videos — including slow
            motion and time-lapse. Prepare to be mesmerised.
          </p>
        </div>
      </SeventhSection>

      <EightSection>8</EightSection>
    </Wrapper>
  );
};

export default Home;

import React, { useState, useRef, useEffect } from 'react';
import ImageSlider from 'components/ImageSlider/ImageSlider';
import { StyledH3 } from 'styles/GlobalStyledComponents.styles';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import {
  FirstElement,
  InnerItem,
  SecondElement,
  ThirdElement,
  Wrapper,
} from './FourthSection.styles';

interface Props {
  setFourthSectionRef: Function;
  fifthSectionRef: any;
}

const FourthSection: React.FC<Props> = ({ setFourthSectionRef, fifthSectionRef }) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const firstRef = useRef<HTMLDivElement>(null);
  const firstRightRef = useRef<HTMLDivElement>(null);

  const secondRef = useRef<HTMLDivElement>(null);
  const secondLeftRef = useRef<HTMLImageElement>(null);
  const secondRightRef = useRef<HTMLImageElement>(null);

  const thirdRef = useRef<HTMLDivElement>(null);
  const thirdLeftRef = useRef<HTMLImageElement>(null);
  const thirdRightRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-height: 670px) and (min-width: 768px)');

    if (firstRef.current) setFourthSectionRef(firstRef.current);

    if (
      mediaQuery.matches &&
      firstRef.current &&
      firstRightRef.current &&
      secondRef.current &&
      secondLeftRef.current &&
      secondRightRef.current &&
      thirdRef.current &&
      thirdLeftRef.current &&
      thirdRightRef.current &&
      fifthSectionRef
    ) {
      const refTable = [firstRef, secondRef, thirdRef];

      const fifthSectionRefCurrent = { current: fifthSectionRef };
      const paralaxBigTable = [
        {
          to: firstRightRef,
          trigger: secondRef,
        },
        {
          to: secondLeftRef,
          trigger: thirdRef,
        },
        {
          to: thirdRightRef,
          trigger: fifthSectionRefCurrent,
        },
      ];
      const paralaxSmallTable = [
        {
          to: secondRightRef,
          trigger: thirdRef,
        },
        {
          to: thirdLeftRef,
          trigger: fifthSectionRefCurrent,
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

    /* video starts when in view */
    if (thirdRightRef.current) {
      ScrollTrigger.create({
        trigger: thirdRightRef.current,
        start: 'top center',
        onEnter: () => thirdRightRef.current && thirdRightRef.current.play(),
      });
    }
  }, [firstRef, fifthSectionRef]);

  return (
    <Wrapper>
      <InnerItem ref={firstRef}>
        <FirstElement>
          <ImageSlider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
        </FirstElement>

        <FirstElement $sliderIndex={sliderIndex}>
          <div ref={firstRightRef}>
            <img width='1042' height='935' src='/images/green-huge.jpg' alt='' aria-hidden='true' />
            <img
              width='1042'
              height='935'
              src='/images/silver-huge.jpg'
              alt=''
              aria-hidden='true'
            />
            <img width='1042' height='935' src='/images/gold-huge.jpg' alt='' aria-hidden='true' />
            <img width='1042' height='935' src='/images/black-huge.jpg' alt='' aria-hidden='true' />
            <img width='1042' height='935' src='/images/blue-huge.jpg' alt='' aria-hidden='true' />
          </div>
        </FirstElement>
      </InnerItem>

      <InnerItem ref={secondRef}>
        <SecondElement>
          <div>
            <img
              src='/images/stainless_steel_2_static__bh174dfhj9te_large.jpg'
              alt='Surgical-grade stainless steel'
              ref={secondRightRef}
              height='657'
              width='53'
            />
          </div>
          <StyledH3>
            Surgical-grade <span>stainless steel</span>
          </StyledH3>
        </SecondElement>

        <SecondElement>
          <img
            src='/images/stainless_steel_1_static__bys3zwk8iieu_large.jpg'
            alt=''
            aria-hidden='true'
            height='960'
            width='201'
            ref={secondLeftRef}
          />
        </SecondElement>
      </InnerItem>

      <InnerItem ref={thirdRef}>
        <ThirdElement>
          <div>
            <img
              src='/images/ceramic_shield_1_static__ci68bor3yn6u_large.jpg'
              alt='Ceramic Shield, tougher than any smartphone glass'
              ref={thirdLeftRef}
              height='543'
              width='270'
            />
          </div>
          <StyledH3>
            Ceramic Shield, tougher than <span>any smartphone glass</span>
          </StyledH3>
        </ThirdElement>

        <ThirdElement>
          <video height='866' width='652' ref={thirdRightRef} muted playsInline preload='auto'>
            <source src='/images/fourthSectionMovie.mp4' type='video/mp4' />
          </video>
        </ThirdElement>
      </InnerItem>
    </Wrapper>
  );
};

export default FourthSection;

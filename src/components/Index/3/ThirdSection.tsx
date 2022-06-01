import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useFixedContent } from 'hooks/useFixedContent';
import gsap from 'gsap';
import { StyledH3 } from 'styles/GlobalStyledComponents.styles';
import {
  Wrapper,
  StyledInnerWrapper,
  StyledLeftPart,
  StyledRightPart,
} from './ThirdSection.styles';

interface Props {
  fourthSectionRef: HTMLDivElement | null;
}

const ThirdSection: React.FC<Props> = ({ fourthSectionRef }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const leftH2Ref = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightH2Ref = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);

  useFixedContent(mainRef);

  useEffect(() => {
    if (
      mainRef.current &&
      leftH2Ref.current &&
      leftImgRef.current &&
      rightH2Ref.current &&
      rightImgRef.current &&
      fourthSectionRef
    ) {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': function () {
          let tl1 = gsap
            .timeline({
              scrollTrigger: {
                trigger: mainRef.current,
                start: '20% bottom',
                end: '45% 45%',
                scrub: true,
              },
            })
            .to(leftImgRef.current, { x: -60 }, 0)
            .to(leftH2Ref.current, { x: -200, opacity: 1 }, 0)
            .to(rightImgRef.current, { x: 60 }, 0)
            .to(rightH2Ref.current, { x: 200, opacity: 1 }, 0);

          let tl2 = gsap
            .timeline({
              scrollTrigger: {
                trigger: fourthSectionRef,
                start: '15% bottom',
                end: '90% bottom',
                scrub: true,
              },
            })
            .to(leftImgRef.current, { x: 0 }, 0)
            .to(leftH2Ref.current, { x: 0, opacity: 0 }, 0)
            .to(rightImgRef.current, { x: 0 }, 0)
            .to(rightH2Ref.current, { x: 0, opacity: 0 }, 0);

          return function () {
            tl1.kill();
            tl2.kill();
          };
        },
        '(max-width: 768px)': function () {
          gsap.set(leftH2Ref.current, { opacity: 1 });
          gsap.set(rightH2Ref.current, { opacity: 1 });
        },
      });
    }
  }, [fourthSectionRef, mainRef, leftH2Ref, leftImgRef, rightH2Ref, rightImgRef]);

  return (
    <Wrapper ref={mainRef}>
      <StyledInnerWrapper>
        <StyledLeftPart>
          <h2 ref={leftH2Ref}>
            iPhone 13 Pro Max
            <span>6.7”</span>
          </h2>
          <div ref={leftImgRef}>
            <Image
              src='/images/section2_2.png'
              alt='iPhone 13 Pro Max 6.7”'
              height='650'
              width='321'
              layout='intrinsic'
            />
          </div>
        </StyledLeftPart>
        <StyledRightPart>
          <h2 ref={rightH2Ref}>
            iPhone 13 Pro
            <span>6.1”</span>
          </h2>
          <div ref={rightImgRef}>
            <Image src='/images/section2_1.png' alt='iPhone 13 Pro 6.1”' height='588' width='292' />
          </div>
        </StyledRightPart>
      </StyledInnerWrapper>

      <StyledH3>Super Retina XDR display1 with ProMotion</StyledH3>
    </Wrapper>
  );
};

export default React.memo(ThirdSection);

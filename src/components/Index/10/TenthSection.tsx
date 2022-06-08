import { useFadeInAnimation } from 'hooks/useFadeInAnimation';
import React, { useRef } from 'react';
import {
  StyledContent,
  StyledHeader,
  StyledImage,
  StyledList,
  StyledYellowListItem,
  Wrapper,
} from './TenthSection.styles';
import { useContentAnimation } from './useContentAnimation';
import { useHeaderAnimation } from './useHeaderAnimation';

const TenthSection: React.FC = () => {
  /* Header Refs */
  const firstHeaderRef = useRef<HTMLDivElement>(null);
  const secondHeaderRef = useRef<HTMLDivElement>(null);
  const thirdHeaderRef = useRef<HTMLDivElement>(null);

  /* Content Refs */
  const firstH3Ref = useRef(null);
  const firstLineRef = useRef(null);
  const firstItemRef = useRef(null);

  const secondH3Ref = useRef(null);
  const secondLineRef = useRef(null);
  const secondItemRef = useRef(null);

  const thirdH3Ref = useRef(null);
  const thirdLineRef = useRef(null);
  const thirdItemRef = useRef(null);

  const footerRef = useRef<HTMLDivElement>(null);

  const refObject = {
    first: [firstH3Ref, firstItemRef, firstLineRef],
    second: [secondH3Ref, secondItemRef, secondLineRef],
    third: [thirdH3Ref, thirdItemRef, thirdLineRef],
  };

  useHeaderAnimation(firstHeaderRef, secondHeaderRef, thirdHeaderRef);
  useContentAnimation(refObject);
  useFadeInAnimation(footerRef);

  return (
    <Wrapper>
      <StyledHeader>
        <h2>
          <span ref={firstHeaderRef}>A snapshot</span>
          <span ref={secondHeaderRef}> of each </span>
          <span ref={thirdHeaderRef}>camera.</span>
        </h2>
      </StyledHeader>

      <StyledContent>
        <StyledList>
          <div>
            <h3 ref={firstH3Ref}>
              Telephoto <span ref={firstLineRef}></span>
            </h3>
            <ul ref={firstItemRef}>
              <StyledYellowListItem>77mm focal length</StyledYellowListItem>
              <StyledYellowListItem>3x optical zoom</StyledYellowListItem>
              <StyledYellowListItem>ƒ/2.8 aperture</StyledYellowListItem>
              <li>Focus Pixels</li>
              <li>6-element lens</li>
              <li>OIS</li>
            </ul>
          </div>

          <div>
            <h3 ref={secondH3Ref}>
              Ultra Wide <span ref={secondLineRef}></span>
            </h3>
            <ul ref={secondItemRef}>
              <li>13mm focal length</li>
              <StyledYellowListItem>ƒ/1.8 aperture</StyledYellowListItem>
              <StyledYellowListItem>Faster sensor</StyledYellowListItem>
              <StyledYellowListItem>Focus Pixels</StyledYellowListItem>
              <StyledYellowListItem>6-element lens</StyledYellowListItem>
            </ul>
          </div>

          <div>
            <h3 ref={thirdH3Ref}>
              Wide <span ref={thirdLineRef}></span>
            </h3>
            <ul ref={thirdItemRef}>
              <li>26mm focal length</li>
              <StyledYellowListItem>1.9 μm pixels</StyledYellowListItem>
              <StyledYellowListItem>ƒ/1.5 aperture</StyledYellowListItem>
              <li>100% Focus Pixels</li>
              <li>7-element lens</li>
              <li>Sensor-shift OIS</li>
            </ul>
          </div>
        </StyledList>

        <StyledImage>
          <img
            src='/images/camera_redesign__epvv5uvn9lea_large.jpg'
            alt='A snapshot of each camera.'
          />

          <p ref={footerRef}>
            Our three most powerful <span>cameras ever</span>
          </p>
        </StyledImage>
      </StyledContent>
    </Wrapper>
  );
};

export default React.memo(TenthSection);

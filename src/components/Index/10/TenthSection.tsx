import React, { useRef } from 'react';
import {
  StyledContent,
  StyledHeader,
  StyledImage,
  StyledList,
  StyledYellowListItem,
  Wrapper,
} from './TenthSection.styles';
import { useHeaderAnimation } from './useHeaderAnimation';

const TenthSection: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const firstHeaderRef = useRef<HTMLDivElement>(null);
  const secondHeaderRef = useRef<HTMLDivElement>(null);
  const thirdHeaderRef = useRef<HTMLDivElement>(null);

  useHeaderAnimation(firstHeaderRef, secondHeaderRef, thirdHeaderRef);

  return (
    <Wrapper ref={wrapperRef}>
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
            <h3>Telephoto</h3>
            <ul>
              <StyledYellowListItem>77mm focal length</StyledYellowListItem>
              <StyledYellowListItem>3x optical zoom</StyledYellowListItem>
              <StyledYellowListItem>ƒ/2.8 aperture</StyledYellowListItem>
              <li>Focus Pixels</li>
              <li>6-element lens</li>
              <li>OIS</li>
            </ul>
          </div>

          <div>
            <h3>Ultra Wide</h3>
            <ul>
              <li>13mm focal length</li>
              <StyledYellowListItem>ƒ/1.8 aperture</StyledYellowListItem>
              <StyledYellowListItem>Faster sensor</StyledYellowListItem>
              <StyledYellowListItem>Focus Pixels</StyledYellowListItem>
              <StyledYellowListItem>6-element lens</StyledYellowListItem>
            </ul>
          </div>

          <div>
            <h3>Wide</h3>
            <ul>
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

          <p>
            Our three most powerful <span>cameras ever</span>
          </p>
        </StyledImage>
      </StyledContent>
    </Wrapper>
  );
};

export default React.memo(TenthSection);

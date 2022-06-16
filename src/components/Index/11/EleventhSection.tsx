import React, { useRef } from 'react';
import HeaderWithCaption from 'components/HeaderWithCaption/HeaderWithCaption';
import GeekOut from 'components/GeekOut/GeekOut';
import CinematicZoom from 'components/CinematicZoom/CinematicZoom';
import CinematicZoomMarginWrapper from 'components/CinematicZoomMarginWrapper/CinematicZoomMarginWrapper';
import { useContentAnimation } from './useContentAnimation';
import { StyledItem, StyledItemsPair, Wrapper, WrapperInner } from './EleventhSection.styles';

const EleventhSection: React.FC = () => {
  const videoProps = {
    src: '/images/bionic.mp4',
    height: 244,
    width: 242,
  };

  const firstBigTitleRef = useRef<HTMLDivElement>(null);
  const firstSmallTitleRef = useRef<HTMLDivElement>(null);
  const secondBigTitleRef = useRef<HTMLDivElement>(null);
  const secondSmallTitleRef = useRef<HTMLDivElement>(null);
  const thirdBigTitleRef = useRef<HTMLDivElement>(null);
  const thirdSmallTitleRef = useRef<HTMLDivElement>(null);

  const animationRefs = {
    bigTitleAnimation: [firstBigTitleRef, secondBigTitleRef, thirdBigTitleRef],
    smallTitleAnimation: [firstSmallTitleRef, secondSmallTitleRef, thirdSmallTitleRef],
  };

  useContentAnimation(animationRefs);

  return (
    <Wrapper>
      <CinematicZoom videoProps={videoProps} />

      <CinematicZoomMarginWrapper videoHeight={videoProps.height}>
        <HeaderWithCaption
          mainHeading={['Pure. Pro. Power.']}
          captions={['A15 Bionic is the world’s', 'fastest smartphone chip.']}
        />

        <WrapperInner>
          <StyledItemsPair>
            <StyledItem>
              <div ref={firstBigTitleRef}>
                <h3>All-new 5‑core GPU</h3>
                <p>
                  delivers faster graphics performance for immersive games, advanced camera features
                  and more
                </p>
              </div>
            </StyledItem>
            <StyledItem>
              <div ref={firstSmallTitleRef}>
                <h3>New CPU performance and efficiency cores</h3>
                <p>power through complex tasks and preserve battery life</p>
              </div>
            </StyledItem>
          </StyledItemsPair>

          <StyledItemsPair>
            <StyledItem>
              <div ref={secondSmallTitleRef}>
                <h3>Superfast Neural Engine</h3>
                <p>
                  performs up to 15.8 trillion operations per second and helps drive Cinematic mode,
                  Smart HDR 4 and more
                </p>
              </div>
            </StyledItem>
            <StyledItem>
              <div ref={secondBigTitleRef}>
                <h3>Advanced ISP</h3>
                <p>takes noise reduction and tone mapping to the next level</p>
              </div>
            </StyledItem>
          </StyledItemsPair>

          <StyledItemsPair>
            <StyledItem>
              <div ref={thirdBigTitleRef}>
                <h3>Secure Enclave</h3>
                <p>protects personal information like your Face ID data, contacts and more</p>
              </div>
            </StyledItem>
            <StyledItem>
              <div ref={thirdSmallTitleRef}>
                <h3>On-device processing</h3>
                <p>keeps things like your Siri requests and interactions with Live Text private</p>
              </div>
            </StyledItem>
          </StyledItemsPair>
        </WrapperInner>

        <GeekOut text={'See how A15 Bionic is powered by collaboration.'} />
      </CinematicZoomMarginWrapper>
    </Wrapper>
  );
};

export default React.memo(EleventhSection);

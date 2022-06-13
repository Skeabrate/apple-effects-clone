import React from 'react';
import HeaderWithCaption from 'components/HeaderWithCaption/HeaderWithCaption';
import GeekOut from 'components/GeekOut/GeekOut';
import CinematicZoom from 'components/CinematicZoom/CinematicZoom';
import CinematicZoomMarginWrapper from 'components/CinematicZoomMarginWrapper/CinematicZoomMarginWrapper';
import { useCinematicZoomOpacity } from 'hooks/useCinematicZoomOpacity';
import { StyledContent, Wrapper } from './NinthSection.styles';

const NinthSection: React.FC = () => {
  const videoProps = {
    src: '/images/ninthsect.mp4',
    imgSrc: '/images/ninthSection.png',
    imgHeight: 981,
    imgWidth: 487,
    height: 284,
    width: 504,
  };

  const { opacity, opacityAnimationHandler } = useCinematicZoomOpacity();

  return (
    <Wrapper>
      <HeaderWithCaption
        mainHeading={['Shift the focus.', 'Up the drama.']}
        captions={['Presenting', 'Cinematic mode.']}
      />

      <CinematicZoom videoProps={videoProps} opacityAnimationHandler={opacityAnimationHandler} />

      <CinematicZoomMarginWrapper videoHeight={videoProps.height} hasImgOrnament>
        <StyledContent $opacity={opacity}>
          <div>
            Now iPhone can shoot with shallow depth of field and automatically add elegant focus
            transitions between subjects. Cinematic mode can also anticipate when a prominent new
            subject is about to enter the frame and bring them into focus when they do, for far more
            creative storytelling. You have the option to change focus or adjust the level of bokeh
            even after capture. We can’t wait to see what you do with it.
          </div>
          <div>
            <p>The only smartphone that lets you edit the depth effect after you shoot</p>
            <p>Shoot with the Wide, Telephoto or TrueDepth camera in Cinematic mode</p>
            <p>Cinematic mode supports Dolby Vision HDR</p>
          </div>
        </StyledContent>

        <GeekOut text={'See how we trained your camera to be a cinematograph­er'} />
      </CinematicZoomMarginWrapper>
    </Wrapper>
  );
};

export default React.memo(NinthSection);

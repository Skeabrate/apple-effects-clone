import React from 'react';
import HeaderWithCaption from 'components/HeaderWithCaption/HeaderWithCaption';
import { StyledContent, StyledMarginWrapper, Wrapper } from './NinthSection.styles';
import GeekOut from 'components/GeekOut/GeekOut';
import CinematicZoom from 'components/CinematicZoom/CinematicZoom';
import { useCinematicZoomMargin } from 'hooks/useCinematicZoomMargin';
import { useCinematicZoomOpacity } from 'hooks/useCinematicZoomOpacity';

const NinthSection: React.FC = () => {
  const videoProps = {
    src: '/images/ninthsect.mp4',
    imgSrc: '/images/ninthSection.png',
    width: 504,
    height: 284,
  };

  const { margin } = useCinematicZoomMargin(videoProps.height);
  const { opacity, opacityAnimationHandler } = useCinematicZoomOpacity();

  return (
    <Wrapper>
      <HeaderWithCaption
        mainHeading={['Shift the focus.', 'Up the drama.']}
        captions={['Presenting', 'Cinematic mode.']}
      />

      <CinematicZoom
        needsImgOrnament
        videoProps={videoProps}
        opacityAnimationHandler={opacityAnimationHandler}
      />

      <StyledMarginWrapper $margin={margin}>
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
      </StyledMarginWrapper>
    </Wrapper>
  );
};

export default React.memo(NinthSection);

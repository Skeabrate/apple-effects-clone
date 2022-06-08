import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HeaderWithCaption from 'components/HeaderWithCaption/HeaderWithCaption';
import {
  StyledContent,
  StyledMarginWrapper,
  StyledVideo,
  StyledVideoInner,
  Wrapper,
} from './NinthSection.styles';
import GeekOut from 'components/GeekOut/GeekOut';

const NinthSection: React.FC = () => {
  const [margin, setMargin] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && contentRef.current && videoContainerRef.current) {
      ScrollTrigger.matchMedia({
        '(min-height: 500px) and (min-width: 1024px)': function () {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: contentRef.current,
                start: 'top top',
                end: '100% bottom',
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                  if (videoRef.current) {
                    if (self.progress) videoRef.current.pause();
                    else videoRef.current.play();
                  }
                },
              },
            })
            .to(videoContainerRef.current, {
              height: '284px',
              width: '504px',
            });
        },
      });
    }
    setMargin(window.innerHeight / 2 - 300);
  }, [videoRef, contentRef, videoContainerRef]);

  return (
    <Wrapper>
      <HeaderWithCaption
        mainHeading={['Shift the focus.', 'Up the drama.']}
        captions={['Presenting', 'Cinematic mode.']}
      />

      <div ref={contentRef}>
        <StyledVideo>
          <StyledVideoInner ref={videoContainerRef}>
            <img
              src='/images/ninthSection.png'
              alt='Presenting cinematic mode.'
              width='981'
              height='487'
            />

            <video ref={videoRef} autoPlay loop muted playsInline preload='auto'>
              <source src='/images/ninthsect.mp4' type='video/mp4' />
            </video>
          </StyledVideoInner>
        </StyledVideo>

        <StyledMarginWrapper $margin={margin}>
          <StyledContent>
            <div>
              Now iPhone can shoot with shallow depth of field and automatically add elegant focus
              transitions between subjects. Cinematic mode can also anticipate when a prominent new
              subject is about to enter the frame and bring them into focus when they do, for far
              more creative storytelling. You have the option to change focus or adjust the level of
              bokeh even after capture. We can’t wait to see what you do with it.
            </div>
            <div>
              <p>The only smartphone that lets you edit the depth effect after you shoot</p>
              <p>Shoot with the Wide, Telephoto or TrueDepth camera in Cinematic mode</p>
              <p>Cinematic mode supports Dolby Vision HDR</p>
            </div>
          </StyledContent>

          <GeekOut text={'See how we trained your camera to be a cinematograph­er'} />
        </StyledMarginWrapper>
      </div>
    </Wrapper>
  );
};

export default React.memo(NinthSection);

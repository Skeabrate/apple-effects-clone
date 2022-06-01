import Heading from 'components/Heading/Heading';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledVideo,
  StyledVideoInner,
  Wrapper,
} from './NinthSection.styles';

const NinthSection: React.FC = () => {
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
            .to(videoContainerRef.current, { height: '281px', width: '499.55px' }, 0);
        },
      });
    }
  }, [videoRef, contentRef, videoContainerRef]);

  return (
    <Wrapper>
      <StyledHeader>
        <Heading>
          Shift the focus.
          <span>Up the drama.</span>
        </Heading>
        <p>
          Presenting <span>Cinematic mode.</span>
        </p>
      </StyledHeader>

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

        <StyledContent>
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

        <StyledFooter>
          <p>See how we trained your camera to be a cinematograph­er</p>
          <button>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z' />
            </svg>
            Geek out
          </button>
        </StyledFooter>
      </div>
    </Wrapper>
  );
};

export default React.memo(NinthSection);

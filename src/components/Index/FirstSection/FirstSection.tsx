import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { StyledVideo, Wrapper } from './FirstSection.styles';
import { useParalax } from 'hooks/useParalax';

const FirstSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  const mainRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useParalax(mainRef);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('playing', () => {
        if (videoRef?.current?.readyState == 4) {
          setIsVideoLoaded(true);
        }
      });
      videoRef.current.addEventListener('suspend', () => {
        if (videoRef?.current?.readyState == 4) {
          setIsVideoLoaded(true);
        }
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {});
        videoRef.current.removeEventListener('suspend', () => {});
      }
    };
  }, [videoRef]);

  useEffect(() => {
    if (h1Ref.current && h2Ref.current) {
      let tl = gsap.timeline({ paused: !isVideoLoaded });

      tl.to(h1Ref.current, {
        opacity: 0,
        duration: 1,
        delay: 1.5,
      }).to(h2Ref.current, {
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
      });
    }
  }, [isVideoLoaded, h1Ref, h2Ref]);

  return (
    <Wrapper ref={mainRef}>
      <StyledVideo>
        <header>
          <h1 ref={h1Ref}>iPhone 13 Pro</h1>
          <div ref={h2Ref}>
            <p>iPhone 13 Pro</p>
            <h2>Oh. So. Pro.</h2>
          </div>
        </header>

        <video ref={videoRef} autoPlay muted playsInline preload='auto'>
          <source src='/images/medium.mp4' type='video/mp4' />
        </video>
      </StyledVideo>
    </Wrapper>
  );
};

export default FirstSection;

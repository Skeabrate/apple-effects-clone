import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { Wrapper } from './FirstSection.styles';
import { useFixedContent } from 'hooks/useFixedContent';

const FirstSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  const mainRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useFixedContent(mainRef);

  const videoLoadingHandler = useCallback(() => {
    if (videoRef?.current?.readyState == 4) {
      setIsVideoLoaded(true);
    }
  }, []);

  useEffect(() => {
    const videoRefCurr = videoRef.current;
    if (videoRefCurr) {
      videoRefCurr.addEventListener('playing', videoLoadingHandler);
      videoRefCurr.addEventListener('suspend', videoLoadingHandler);
    }

    return () => {
      if (videoRefCurr) {
        videoRefCurr.removeEventListener('loadeddata', videoLoadingHandler);
        videoRefCurr.removeEventListener('suspend', videoLoadingHandler);
      }
    };
  }, [videoRef, videoLoadingHandler]);

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
    </Wrapper>
  );
};

export default React.memo(FirstSection);

import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { WrapperInner, WrapperOuter } from './CinematicZoom.styles';
import ScrollContext from 'context/ScrollContext';

interface Props {
  videoProps: {
    src: string;
    imgSrc?: string;
    imgHeight?: number;
    imgWidth?: number;
    height: number;
    width: number;
  };
  opacityAnimationHandler?: Function;
  isVideoLooped?: boolean;
}

const CinematicZoom: React.FC<Props> = ({ videoProps, opacityAnimationHandler, isVideoLooped }) => {
  const [notLoopedVideoState, setNotLoopedVideoState] = useState<boolean>(false);

  const stickyContentRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { isSticky } = useContext(ScrollContext);

  useEffect(() => {
    if (
      !isVideoLooped &&
      videoRef.current &&
      videoRef.current.getBoundingClientRect().top - window.innerHeight >= 0
    ) {
      setNotLoopedVideoState(false);
    }
  }, [isSticky, videoRef, isVideoLooped]);

  useEffect(() => {
    if (videoRef.current) {
      if (notLoopedVideoState) videoRef.current.play();
      else videoRef.current.load();
    }
  }, [notLoopedVideoState]);

  useEffect(() => {
    if (videoRef.current && stickyContentRef.current && videoContainerRef.current) {
      ScrollTrigger.matchMedia({
        '(min-height: 500px) and (min-width: 1024px)': function () {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: stickyContentRef.current,
                start: 'top top',
                end: '150% bottom',
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                  opacityAnimationHandler && opacityAnimationHandler(self.progress);

                  if (videoRef.current && isVideoLooped) {
                    if (self.progress) videoRef.current.pause();
                    else videoRef.current.play();
                  } else if (videoRef.current && !isVideoLooped) {
                    if (self.progress >= 0.6) setNotLoopedVideoState(true);
                  }
                },
              },
            })
            .to(videoContainerRef.current, {
              height: `${videoProps.height}px`,
              width: `${videoProps.width}px`,
            });
        },
      });
    }
  }, [
    videoRef,
    stickyContentRef,
    videoContainerRef,
    isVideoLooped,
    opacityAnimationHandler,
    videoProps.width,
    videoProps.height,
  ]);

  return (
    <div ref={stickyContentRef}>
      <WrapperOuter>
        <WrapperInner $isWide={videoProps.width > videoProps.height} ref={videoContainerRef}>
          {videoProps.imgSrc ? (
            <img
              src={videoProps.imgSrc}
              alt='Presenting cinematic mode.'
              width={videoProps.imgWidth}
              height={videoProps.imgHeight}
            />
          ) : null}

          <video
            ref={videoRef}
            autoPlay={isVideoLooped}
            loop={isVideoLooped}
            muted
            playsInline
            preload='auto'
          >
            <source src={videoProps.src} type='video/mp4' />
          </video>
        </WrapperInner>
      </WrapperOuter>
    </div>
  );
};

export default CinematicZoom;

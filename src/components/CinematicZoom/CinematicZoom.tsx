import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { WrapperInner, WrapperOuter } from './CinematicZoom.styles';

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
}

const CinematicZoom: React.FC<Props> = ({ videoProps, opacityAnimationHandler }) => {
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

                  if (videoRef.current) {
                    if (self.progress) videoRef.current.pause();
                    else videoRef.current.play();
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
  }, [videoRef, stickyContentRef, videoContainerRef]);

  return (
    <div ref={stickyContentRef}>
      <WrapperOuter>
        <WrapperInner ref={videoContainerRef}>
          {videoProps.imgSrc ? (
            <img
              src={videoProps.imgSrc}
              alt='Presenting cinematic mode.'
              width={videoProps.imgWidth}
              height={videoProps.imgHeight}
            />
          ) : null}

          <video ref={videoRef} autoPlay loop muted playsInline preload='auto'>
            <source src={videoProps.src} type='video/mp4' />
          </video>
        </WrapperInner>
      </WrapperOuter>
    </div>
  );
};

export default CinematicZoom;

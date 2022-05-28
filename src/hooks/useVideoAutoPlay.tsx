import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const useVideoAutoPlay = (ref: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    if (ref.current) {
      const videoCurr = ref.current;

      ScrollTrigger.create({
        trigger: videoCurr,
        start: 'top center',
        onEnter: () => videoCurr.play(),
      });
    }
  }, [ref]);
};

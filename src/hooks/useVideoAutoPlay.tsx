import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const useVideoAutoPlay = (ref: React.RefObject<HTMLVideoElement> | null) => {
  useEffect(() => {
    const videoCurr = ref ? ref.current : null;

    if (videoCurr) {
      ScrollTrigger.create({
        trigger: videoCurr,
        start: 'top center',
        onEnter: () => videoCurr.play(),
      });
    }
  }, [ref]);
};

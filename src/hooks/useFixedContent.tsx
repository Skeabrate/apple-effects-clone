import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const useFixedContent = (ref: React.RefObject<HTMLDivElement> | null) => {
  useEffect(() => {
    if (ref && ref.current) {
      const currRef = ref.current;

      ScrollTrigger.matchMedia({
        '(min-height: 820px) and (min-width: 768px)': function () {
          let tl = ScrollTrigger.create({
            trigger: currRef,
            start: 'top top',
            pin: true,
            pinSpacing: false,
          });

          return function () {
            tl.kill();
          };
        },
      });
    }
  }, [ref]);
};

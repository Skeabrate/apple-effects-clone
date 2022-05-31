import React, { useRef, useState, useEffect, useContext } from 'react';
import ScrollContext from 'context/ScrollContext';
import gsap from 'gsap';
import {
  Wrapper,
  StyledHelperUp,
  StyledImage,
  StyledHelperDown,
  StyledContent,
} from './SixthSection.styles';

const SixthSection: React.FC = () => {
  const [paralax, setParalax] = useState<{ isActive: boolean; isOnTop: boolean }>({
    isActive: false,
    isOnTop: true,
  });

  const { isSticky } = useContext(ScrollContext);

  const helperUpRef = useRef<HTMLDivElement>(null);
  const helperDownRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (helperUpRef.current && imageRef.current) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: helperUpRef.current,
          scrub: true,
          start: '0% bottom',
          end: '100% bottom',
        },
        y: '-10%',
      });
    }
  }, [helperUpRef, imageRef]);

  useEffect(() => {
    if (helperUpRef.current && helperDownRef.current) {
      if (
        helperUpRef.current.getBoundingClientRect().top <= window.innerHeight &&
        helperDownRef.current.getBoundingClientRect().top >= window.innerHeight
      ) {
        setParalax((state) => ({
          ...state,
          isActive: true,
        }));
      } else if (helperUpRef.current.getBoundingClientRect().top >= window.innerHeight) {
        setParalax({
          isActive: false,
          isOnTop: true,
        });
      } else if (helperDownRef.current.getBoundingClientRect().top <= window.innerHeight) {
        setParalax({
          isActive: false,
          isOnTop: false,
        });
      }
    }
  }, [isSticky, helperUpRef, helperDownRef]);

  return (
    <Wrapper>
      <StyledHelperUp ref={helperUpRef} />
      <StyledImage
        ref={imageRef}
        paralaxIsActive={paralax.isActive}
        paralaxIsOnTop={paralax.isOnTop}
      >
        <img src='/images/SixthSection.png' alt='Pro camera system' />
      </StyledImage>

      <StyledContent>
        Our <span>Pro camera system</span> gets its biggest upgrade ever. With{' '}
        <span>next-level hardware</span> that captures so much more detail.{' '}
        <span>Super-intelligent software</span> for new photo and filmmaking techniques. And a{' '}
        <span>mind-blowingly fast chip</span> that makes it all possible.{' '}
        <span>It’ll change the way you shoot.</span>
      </StyledContent>
      <StyledHelperDown ref={helperDownRef} />
    </Wrapper>
  );
};

export default React.memo(SixthSection);

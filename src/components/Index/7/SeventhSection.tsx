import React, { useRef } from 'react';
import Image from 'next/image';
import Heading from 'components/Heading/Heading';
import { Wrapper } from './SeventhSection.styles';
import { useVideoAutoPlay } from 'hooks/useVideoAutoPlay';
import { useFadeInAnimation } from 'hooks/useFadeInAnimation';

const SeventhSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useVideoAutoPlay(videoRef);
  useFadeInAnimation(firstRef, secondRef);

  return (
    <Wrapper>
      <div>
        <Image
          src='/images/macro_photography__e2abtsqe82c2_large.jpg'
          alt='Macro photography comes to iPhone.'
          height='1019'
          width='1358'
        />
      </div>

      <div>
        <Heading>Whoa.</Heading>

        <div ref={firstRef}>
          <h3>Macro photography comes to iPhone.</h3>
          <p>
            With its redesigned lens and powerful autofocus system, the new Ultra Wide camera can
            focus at just 2cm — making even the smallest details seem epic. Transform a leaf into
            abstract art. Capture a caterpillar’s fuzz. Magnify a dewdrop. The beauty of tiny
            awaits.
          </p>
        </div>
      </div>

      <video height='768' width='1358' ref={videoRef} muted playsInline preload='auto'>
        <source src='/images/seventh.mp4' type='video/mp4' />
      </video>

      <div ref={secondRef}>
        <h3>Macro video, anyone?</h3>
        <p>
          Macro stills are just the beginning. You can also shoot macro videos — including slow
          motion and time-lapse. Prepare to be mesmerised.
        </p>
      </div>
    </Wrapper>
  );
};

export default React.memo(SeventhSection);

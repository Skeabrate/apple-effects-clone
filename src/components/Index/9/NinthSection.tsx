import Heading from 'components/Heading/Heading';
import React from 'react';
import { StyledHeader, Wrapper } from './NinthSection.styles';

const NinthSection: React.FC = () => {
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

      <video
        style={{ height: '100vh', width: 'auto' }}
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
      >
        <source src='/images/ninthsect.mp4' type='video/mp4' />
      </video>
    </Wrapper>
  );
};

export default NinthSection;

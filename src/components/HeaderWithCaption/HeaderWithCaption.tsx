import React from 'react';
import Heading from 'components/Heading/Heading';
import { StyledHeader } from './HeaderWithCaption.styles';

interface Props {
  mainHeading: string[];
  captions: string[];
}

const HeaderWithCaption: React.FC<Props> = ({ mainHeading, captions }) => {
  return (
    <StyledHeader>
      <Heading>
        {mainHeading.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </Heading>
      <p>
        {captions.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </StyledHeader>
  );
};

export default HeaderWithCaption;

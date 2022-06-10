import React from 'react';
import { StyledHeader, StyledLock, StyledArticle, Wrapper } from './TwelfthSection.styles';

const TwelfthSection: React.FC = () => {
  return (
    <Wrapper>
      <StyledLock />
      <StyledHeader>
        <h2>
          Privacy is <span>built in.</span>
        </h2>
      </StyledHeader>

      <StyledArticle>
        <p>
          iPhone helps put you in control of your personal information. For example, when you’re
          browsing, Safari intelligently helps block trackers from profiling you and shows you which
          ones have been blocked in your Privacy Report. And the list goes on.
        </p>
        <a href='#'>
          Learn more about Apple and privacy <span>arrow SVG</span>
        </a>
      </StyledArticle>
    </Wrapper>
  );
};

export default React.memo(TwelfthSection);

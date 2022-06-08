import React from 'react';
import { Wrapper } from './TwelfthSection.styles';

const TwelfthSection: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <p>Apple lock</p>
        <h2>
          Privacy is <span>built in.</span>
        </h2>
      </div>

      <div>
        <p>
          iPhone helps put you in control of your personal information. For example, when you’re
          browsing, Safari intelligently helps block trackers from profiling you and shows you which
          ones have been blocked in your Privacy Report. And the list goes on.
        </p>

        <button>
          Learn more about Apple and privacy <span>arrow SVG</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default React.memo(TwelfthSection);

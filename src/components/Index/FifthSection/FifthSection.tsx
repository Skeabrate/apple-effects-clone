import React, { useEffect, useRef } from 'react';
import { StyledH3 } from 'styles/GlobalStyledComponents.styles';
import { Wrapper } from './FifthSection.styles';

interface Props {
  setFifthSectionRef: Function;
}

const FifthSection: React.FC<Props> = ({ setFifthSectionRef }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) setFifthSectionRef(mainRef.current);
  }, [mainRef]);

  return (
    <Wrapper ref={mainRef}>
      <img
        src='/images/water_resistant__ddhg6jxs53yq_large.jpg'
        alt='Industry-leading IP68 water resistance'
        width='884'
        height='1394'
      />

      <StyledH3>
        Industry-leading IP68 <span>water resistance&#178;</span>
      </StyledH3>
    </Wrapper>
  );
};

export default FifthSection;

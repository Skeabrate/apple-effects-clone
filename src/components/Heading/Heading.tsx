import * as React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  ${({ theme }) => theme.fontSize.font56()};

  span {
    display: block;
  }

  ${({ theme }) => theme.mq.tablet} {
    ${({ theme }) => theme.fontSize.font80()};
  }

  ${({ theme }) => theme.mq.desktop} {
    ${({ theme }) => theme.fontSize.font120()};
  }
`;

interface IHeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<IHeadingProps> = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;

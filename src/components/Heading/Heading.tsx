import * as React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.headingTablet};

  span {
    display: block;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.heading};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.huge};
  }
`;

interface IHeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<IHeadingProps> = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;

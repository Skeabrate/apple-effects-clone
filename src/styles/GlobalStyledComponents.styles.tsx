import styled from 'styled-components';

export const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  text-align: center;

  span {
    display: block;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: 2rem;
  }
`;

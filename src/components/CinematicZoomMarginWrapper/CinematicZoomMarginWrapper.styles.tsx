import styled from 'styled-components';

interface Props {
  $margin: number;
}

export const Wrapper = styled.div<Props>`
  @media (min-width: 1024px) and (min-height: 500px) {
    margin: ${({ $margin }) => `-${$margin}px auto 0`};
  }
`;

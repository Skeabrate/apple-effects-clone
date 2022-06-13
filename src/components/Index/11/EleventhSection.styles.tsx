import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
  margin-top: 6rem;

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 12rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 24rem;
  }
`;

export const WrapperInner = styled.div``;

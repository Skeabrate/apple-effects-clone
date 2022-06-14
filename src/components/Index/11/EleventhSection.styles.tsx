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

export const WrapperInner = styled.div`
  position: relative;
  ${({ theme }) => theme.paddingMobile()};
  display: grid;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.headingMobile};
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: 8px;
    line-height: 1.1;
  }

  p {
    color: #6e6e73;
    font-weight: 500;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-gap: 1px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: radial-gradient(closest-side, #d2d2d7, transparent);
    }
  }
`;

export const StyledItem = styled.div`
  position: relative;
  padding-block: 25px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #d2d2d7;
  }

  ${({ theme }) => theme.mq.tablet} {
    &::after {
      display: none;
    }
  }
`;

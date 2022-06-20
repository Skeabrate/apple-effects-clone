import styled, { css } from 'styled-components';

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
  ${({ theme }) => theme.paddingMobile()};

  ${({ theme }) => theme.mq.tablet} {
    width: 768px;
    margin: 0 auto;
    padding: 0;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(closest-side, #d2d2d7, transparent);
      width: 120%;
      height: 180%;
      z-index: -1;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 1024px;

    &::after {
      height: 240%;
    }
  }
`;

export const StyledItem = styled.div`
  position: relative;
  padding-block: 35px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #d2d2d7;
  }

  h3 {
    ${({ theme }) => theme.fontSize.font32()};
    padding-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: 500;
  }

  ${({ theme }) => theme.mq.tablet} {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 40px;

    h3 {
      padding-bottom: 12px;
    }

    &:first-child {
      margin-right: 1px;
    }

    &::after {
      display: none;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 80px 100px;

    h3 {
      padding-bottom: 16px;
    }
  }
`;

const bigStyledItem = css`
  width: 56%;

  h3 {
    ${({ theme }) => theme.fontSize.font56()};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 58%;

    h3 {
      ${({ theme }) => theme.fontSize.font64()};
    }
  }
`;

const smallStyledItem = css`
  width: 44%;

  h3 {
    ${({ theme }) => theme.fontSize.font24()};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 42%;

    h3 {
      ${({ theme }) => theme.fontSize.font32()};
    }
  }
`;

export const StyledItemsPair = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    margin-block: 1px;

    ${StyledItem}:nth-child(1) {
      ${bigStyledItem};
    }
    ${StyledItem}:nth-child(2) {
      ${smallStyledItem};
    }

    &:nth-child(2) {
      ${StyledItem}:nth-child(1) {
        ${smallStyledItem};
      }
      ${StyledItem}:nth-child(2) {
        ${bigStyledItem};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    ${StyledItem}:nth-child(1) {
      ${bigStyledItem};
    }

    ${StyledItem}:nth-child(2) {
      ${smallStyledItem};
    }

    &:nth-child(2) {
      ${StyledItem}:nth-child(1) {
        ${smallStyledItem};
      }

      ${StyledItem}:nth-child(2) {
        ${bigStyledItem};
      }
    }
  }
`;

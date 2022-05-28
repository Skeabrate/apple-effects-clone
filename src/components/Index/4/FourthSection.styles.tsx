import styled, { css } from 'styled-components';

interface Props {
  $sliderIndex?: number;
}

export const Wrapper = styled.section`
  ${({ theme }) => theme.ContainerStyles()};
  position: relative;
`;

export const StyledInnerItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  /* After element to extend scrolling */
  @media screen and (min-height: 670px) and (min-width: 768px) {
    &::after {
      content: '';
      position: relative;
      left: 0;
      height: 300px;
      width: 100%;
      z-index: -1;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ElementHelper = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 670px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  img,
  video {
    bottom: 0px;
    min-height: 500px;
    height: 75vh;
    max-height: 1000px;
    width: auto;
  }

  &:nth-child(2) {
    background-color: black;
  }
`;

const SecondandThirdHelper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0 30px;
  gap: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  img {
    object-fit: contain;
  }
`;

export const StyledFirstElement = styled.div<Props>`
  ${ElementHelper};
  &:nth-child(2) {
    div {
      width: 100%;
      height: 100%;

      img {
        position: absolute;
        left: 10%;
        transition: opacity 1.2s ease;

        &:not(:nth-child(${({ $sliderIndex = 0 }) => $sliderIndex + 1})) {
          opacity: 0;
        }

        &:nth-child(${({ $sliderIndex = 0 }) => $sliderIndex + 1}) {
          z-index: 1;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) and (max-height: 1000px) {
    &:nth-child(2) {
      div {
        img {
          height: 95vh;
          max-height: unset;
          bottom: unset;
          top: 15%;
        }
      }
    }
  }
`;

export const StyledSecondElement = styled.div`
  ${ElementHelper};
  &:nth-child(1) {
    ${SecondandThirdHelper};
    img {
      max-height: 600px;
    }
  }

  &:nth-child(2) {
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    &:nth-child(1) {
      grid-column: 2;
    }

    &:nth-child(2) {
      grid-column: 1;
      grid-row: 1;
    }
  }
`;

export const StyledThirdElement = styled.div`
  ${ElementHelper};
  &:nth-child(1) {
    ${SecondandThirdHelper};

    img {
      max-height: 550px;
    }
  }

  &:nth-child(2) {
    video {
      position: absolute;
      left: 55%;
      transform: translateX(-50%);
    }
  }
`;

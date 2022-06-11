import styled from 'styled-components';

interface Props {
  $margin: number;
}

export const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  overflow: hidden;

  ${({ theme }) => theme.mq.desktop} {
    padding-bottom: 10rem;
  }
`;

export const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

export const StyledVideoInner = styled.div`
  img {
    display: none;
  }

  video {
    width: 100%;
    height: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    height: 100vh;
    position: relative;
    align-items: center;

    img {
      display: initial;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      height: 172%;
      object-fit: cover;
    }

    video {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      width: auto;
      height: 100%;
      object-fit: cover;
      will-change: transform;
      transform-origin: center;
    }
  }
`;

export const StyledMarginWrapper = styled.div<Props>`
  @media (min-width: 1024px) and (min-height: 500px) {
    margin: ${({ $margin }) => `-${$margin}px auto 0`};
  }
`;

export const StyledContent = styled.div`
  ${({ theme }) => theme.paddingMobile()};
  font-weight: 500;
  width: fit-content;
  margin: 5rem auto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  div:first-child {
    color: #6e6e73;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  p {
    font-size: 24px;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    gap: 80px;

    div:first-child {
      max-width: 300px;
    }

    div:nth-child(2) {
      gap: 50px;
      max-width: 400px;
    }
  }
`;

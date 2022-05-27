import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 600px;
  max-height: 1000px;
  width: 100%;
  z-index: -1;

  ${({ theme }) => theme.mq.tablet} {
    min-height: 700px;
  }

  ${({ theme }) => theme.mq.desktop} {
    min-height: 800px;
  }

  ${({ theme }) => theme.mq.huge} {
    min-height: 900px;
  }
`;

export const StyledVideo = styled.div`
  header {
    width: fit-content;
    text-align: center;
    position: absolute;
    bottom: 300px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    line-height: 1.25;

    h1 {
      position: absolute;
      font-size: 3rem;
      width: fit-content;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }

    div {
      opacity: 0;

      p {
        font-size: 2rem;
        font-weight: 500;
      }

      h2 {
        font-size: ${({ theme }) => theme.fontSize.headingTablet};
      }
    }
  }

  video {
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
  }

  ${({ theme }) => theme.mq.tablet} {
    header {
      bottom: 400px;

      h1 {
        font-size: 6rem;
        letter-spacing: -2px;
      }

      div {
        p {
          font-size: 3rem;
        }

        h2 {
          letter-spacing: ${({ theme }) => theme.letterSpacing.heading};
          font-size: ${({ theme }) => theme.fontSize.heading};
        }
      }
    }

    video {
      width: 1200px;
      bottom: -300px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    header {
      bottom: 500px;
    }

    video {
      width: 1800px;
      bottom: -500px;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    header {
      bottom: 600px;
    }

    video {
      width: 2200px;
      bottom: -600px;
    }
  }
`;

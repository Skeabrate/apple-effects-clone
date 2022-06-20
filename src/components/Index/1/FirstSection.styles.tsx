import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 600px;
  max-height: 1000px;
  width: 100%;
  z-index: -1;

  header {
    width: fit-content;
    text-align: center;
    position: absolute;
    bottom: 300px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    h1 {
      position: absolute;
      ${({ theme }) => theme.fontSize.font32()};
      width: fit-content;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }

    div {
      opacity: 0;

      p {
        font-weight: 500;
      }

      h2 {
        ${({ theme }) => theme.fontSize.font56()};
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
    min-height: 700px;

    header {
      bottom: 400px;

      h1 {
        ${({ theme }) => theme.fontSize.font64()};
      }

      div {
        p {
          ${({ theme }) => theme.fontSize.font32()};
        }

        h2 {
          ${({ theme }) => theme.fontSize.font80()};
        }
      }
    }

    video {
      width: 1200px;
      bottom: -300px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    min-height: 800px;

    header {
      bottom: 500px;
    }

    video {
      width: 1800px;
      bottom: -500px;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    min-height: 900px;

    header {
      bottom: 600px;
    }

    video {
      width: 2200px;
      bottom: -600px;
    }
  }
`;

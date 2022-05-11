import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.main`
  max-width: 2000px;
  margin: 0 auto;
`;

const appearH1 = keyframes`
	0% {
		opacity: 0;
	} 50% {
		opacity:1;
	} 100% {
		opacity: 0;
	}
`;
const appearDiv = keyframes`
	from {
		opacity:0;
	} to {
		opacity:1;
	}
`;

export const FirstSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 600px;

  ${({ theme }) => theme.mq.tablet} {
    height: 700px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 900px;
  }
`;

export const StyledFirstVideo = styled.div`
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
      font-size: 2rem;
      opacity: 0;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      animation: ${appearH1} 3s forwards;
      animation-delay: 0.5s;
    }

    div {
      opacity: 0;
      animation: ${appearDiv} 1s forwards;
      animation-delay: 3.6s;

      p {
        font-size: 2rem;
        font-weight: bold;
      }

      h2 {
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
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
        font-size: 3rem;
      }

      div {
        p {
          font-size: 3rem;
        }

        h2 {
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

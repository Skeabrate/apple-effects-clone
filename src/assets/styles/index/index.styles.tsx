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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 50px;
  height: calc(100vh - 94px);
  overflow: hidden;

  header {
    text-align: center;

    h1 {
      width: fit-content;
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      opacity: 0;
      font-size: 3rem;
      animation: ${appearH1} 3s forwards;
      animation-delay: 0.5s;
    }

    div {
      width: fit-content;
      position: absolute;
      top: 50px;
      left: 50%;
      z-index: 1;
      transform: translateX(-50%);
      opacity: 0;
      animation: ${appearDiv} 1s forwards;
      animation-delay: 3.6s;

      p {
        font-weight: bold;
        font-size: 2rem;

        ${({ theme }) => theme.mq.tablet} {
          font-size: 3rem;
        }
      }

      h2 {
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
      }
    }

    ${({ theme }) => theme.mq.tablet} {
      h1 {
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
      }

      div {
        h2 {
          font-size: ${({ theme }) => theme.fontSize.heading};
        }
      }
    }
  }

  video {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;

    ${({ theme }) => theme.mq.tablet} {
      width: 1200px;
      bottom: -300px;
    }

    ${({ theme }) => theme.mq.desktop} {
      width: 1500px;
      bottom: -400px;
    }

    ${({ theme }) => theme.mq.huge} {
      width: 2000px;
      bottom: -600px;
    }
  }
`;

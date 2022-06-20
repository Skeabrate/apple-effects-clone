import styled from 'styled-components';

interface Props {
  $isHighlighted: number;
}

export const Wrapper = styled.section<Props>`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    min-width: 100%;
    width: auto;
    min-height: 100%;
    height: auto;
    z-index: -1;
    object-fit: contain;
  }

  div {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 4rem;

    span {
      color: ${({ theme }) => theme.colors.grey3};
      ${({ theme }) => theme.fontSize.font32()};
      font-weight: 500;
      opacity: 0.25;
      transition: opacity 0.3s ease-out;
      padding-block: 0.2rem;

      &:nth-child(${({ $isHighlighted = 0 }) => $isHighlighted + 1}) {
        opacity: 1;
      }

      &:last-child {
        margin-top: 3rem;
        display: block;

        p {
          font-size: ${({ theme }) => theme.fontSize.paragraphMobile};
          letter-spacing: -0.6px;
          display: flex;
          flex-direction: column;
          margin-top: 2rem;

          &:first-child {
            margin-top: 3rem;
          }
        }
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 15rem 0;

    div {
      span {
        ${({ theme }) => theme.fontSize.font56()};
        padding-block: 0;

        &:last-child {
          margin-top: 5.6rem;

          p {
            ${({ theme }) => theme.fontSize.font24()};

            &:first-child {
              margin-top: 5.6rem;
            }
          }
        }
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    div {
      max-width: 975px;

      span {
        ${({ theme }) => theme.fontSize.font80()};

        &:last-child {
          margin-top: 8rem;

          p:first-child {
            margin-top: 8rem;
          }
        }
      }
    }
  }
`;

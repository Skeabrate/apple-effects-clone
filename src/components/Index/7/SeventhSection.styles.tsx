import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  overflow: hidden;
  position: relative;
  background: white;

  p {
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: 500;
  }

  h3 {
    ${({ theme }) => theme.fontSize.font24()};
    width: 250px;
    padding-bottom: 16px;
  }

  div:first-child {
    padding-top: 10rem;
    width: fit-content;
    margin: 0 auto;
  }

  div:nth-of-type(2),
  div:nth-of-type(3) {
    padding: 3rem 6vw 5rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  video {
    width: 100%;
    height: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.mq.tablet} {
    h3 {
      ${({ theme }) => theme.fontSize.font32()};
      width: unset;
    }

    div:first-child {
      padding-top: 15rem;
    }

    div:nth-of-type(2),
    div:nth-of-type(3) {
      flex-direction: row;
      width: fit-content;
      gap: 150px;
      margin: 0 auto;
      padding: 5rem 6vw 12rem;

      div,
      p {
        max-width: 255px;
      }
    }

    div:nth-of-type(2) h3 {
      width: 300px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    div:nth-of-type(2),
    div:nth-of-type(3) {
      gap: 200px;

      h3 {
        ${({ theme }) => theme.fontSize.font40()};
      }

      p {
        max-width: 330px;
      }
    }

    video {
      width: unset;
      height: auto;
    }

    div:nth-of-type(2) h3 {
      padding-top: 10px;
      width: 380px;
    }
  }
`;

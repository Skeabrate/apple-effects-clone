import styled from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => theme.containerStyles()}
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
  background: white;

  ${({ theme }) => theme.mq.desktop} {
    height: 900px;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    h2 {
      display: flex;
      flex-direction: column;
      font-size: ${({ theme }) => theme.fontSize.paragraph};
      opacity: 1;

      span {
        font-size: 4rem;
      }
    }

    img {
      object-fit: contain;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    div {
      justify-content: flex-end;

      h2 {
        font-size: 2rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 200px;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    div {
      height: 650px;
    }
  }
`;

export const StyledLeftPart = styled.div`
  margin-right: -40px;

  div {
    width: 200px;
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: right;
    margin-right: -50px;

    div {
      width: 250px;
    }

    h2 {
      left: -100px;
      z-index: 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-right: -70px;

    div {
      width: unset;
    }
  }
`;

export const StyledRightPart = styled.div`
  margin-left: -40px;
  text-align: right;

  div {
    width: 171px;
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
    margin-left: -200px;

    div {
      width: 221px;
    }

    h2 {
      right: -100px;
      z-index: 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: -200px;

    div {
      width: unset;
    }
  }
`;

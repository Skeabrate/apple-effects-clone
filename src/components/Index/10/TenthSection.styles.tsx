import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background: black;
  position: relative;
  color: #f5f5f7;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledHeader = styled.header`
  font-size: ${({ theme }) => theme.fontSize.headingMobile};
  line-height: 1;
  width: fit-content;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 3rem 0 6rem;

  span {
    display: block;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.headingTablet};
    padding: 6rem 0 12rem;
    left: 58%;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: 8rem;
    padding: 10rem 0 20rem;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    align-items: flex-start;
    max-width: 600px;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1000px;
  }
`;

export const StyledList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 0 20px;
  row-gap: 20px;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;

  h3 {
    position: relative;
    margin-bottom: 12px;

    span {
      position: absolute;
      background-color: white;
      height: 1px;
      width: 60%;
      bottom: -6px;
      left: 0;
      transform-origin: left;
    }
  }

  ul {
    list-style: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr;
    margin: 60px 0 0;
    height: fit-content;
    row-gap: 20px;

    h3 {
      font-size: 2rem;
      margin-bottom: 10px;

      span {
        position: absolute;
        background-color: white;
        height: 1px;
        bottom: -6px;
        left: 0;
      }
    }

    div:first-child {
      h3 span {
        width: 384px;
      }
    }

    div:nth-child(2) {
      h3 span {
        width: 514px;
      }
    }

    div:nth-child(3) {
      h3 span {
        width: 391px;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 140px 0 0;
    row-gap: 50px;

    h3 {
      font-size: 3.2rem;
      margin-bottom: 16px;

      span {
        bottom: -8px;
      }
    }

    ul {
      line-height: 1.2;

      li {
        font-size: 1.9rem;
      }
    }

    div:first-child {
      h3 span {
        width: 645px;
      }
    }

    div:nth-child(2) {
      margin-left: 160px;

      h3 span {
        width: 700px;
      }
    }

    div:nth-child(3) {
      h3 span {
        width: 662px;
      }
    }
  }
`;

export const StyledYellowListItem = styled.li`
  color: #ffe701;
`;

export const StyledImage = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 0;

  p {
    color: black;
    position: absolute;
    bottom: 15px;
    font-weight: 500;
    text-align: center;
    width: 100%;

    span {
      display: block;
    }
  }

  img {
    width: 300px;
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    max-width: 350px;

    p {
      font-size: 3rem;
      bottom: 40px;
      left: 100px;
      text-align: left;
      width: 100%;
    }

    img {
      width: 650px;
      height: auto;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    max-width: 550px;

    p {
      bottom: 60px;
      left: 180px;
    }

    img {
      width: unset;
      height: auto;
    }
  }
`;

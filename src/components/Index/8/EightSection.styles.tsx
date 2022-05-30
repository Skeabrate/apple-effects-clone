import styled, { css } from 'styled-components';

interface Props {
  $isAlone?: boolean;
  $isSmall?: boolean;
}

export const Wrapper = styled.section`
  width: 100%;
  background-color: black;
  color: white;

  h3 {
    font-size: 3.2rem;
    line-height: 1.1;
  }

  p {
    color: #86868b;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    padding-block: 10px;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding-top: 70px;

    p {
      font-size: 1.9rem;
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.headingTablet};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    padding-top: 140px;
  }
`;

const articleHelper = css`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  margin: 0 auto;

  div {
    padding: 60px 6vw;
  }

  span {
    display: block;
  }

  img {
    align-self: center;
    object-fit: contain;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    max-width: 900px;
  }
`;

const bigImage = css`
  max-width: 440px;
  height: auto;
  object-fit: contain;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 500px;
  }
`;

const smallImage = css`
  max-width: 350px;
  height: auto;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 480px;
  }
`;

export const StyledFirstArticle = styled.article`
  ${articleHelper};

  p {
    margin-top: 40px;
  }

  img {
    ${bigImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;

    img {
      z-index: 2;
    }

    div {
      min-width: 450px;
      padding: 10px 20px 0 50px;
    }
  }
`;

export const StyledSecondArticle = styled.article`
  ${articleHelper};

  img {
    ${smallImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    width: fit-content;

    div {
			min-width: 290px
      max-width: 350px;
      padding: 80px 100px 80px 30px;
    }

    img {
      margin-top: -180px;
      z-index: 1;
      border: 1px solid #1d1d1d;
      border-right: unset;
    }
  }
`;

export const StyledThirdArticle = styled.article`
  ${articleHelper};

  img {
    ${bigImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;

    div {
      min-width: 360px;
      padding: 100px 20px 0 50px;
    }

    img {
      z-index: 0;
      margin-top: -50px;
    }
  }
`;

export const StyledFourthArticle = styled.article`
  ${articleHelper};

  img {
    ${bigImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;

    div {
      min-width: 350px;
      max-width: 350px;
      padding: 120px 20px 0 50px;
    }

    img {
      z-index: 2;
      margin-top: -80px;
    }
  }
`;

export const StyledFifthArticle = styled.article`
  ${articleHelper};
`;

export const StyledAloneImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 40px;
    max-width: 400px;
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    position: relative;
    left: 250px;

    img {
      margin-top: -160px;
      max-width: 700px;
      height: auto;
      z-index: 1;
    }
  }
`;

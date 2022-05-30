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
  margin: 0px auto;

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
    max-width: 1100px;
    background: red;

    div {
      min-width: 400px;
      max-width: 500px;
      background: yellow;
      padding: 50px 10px 0 40px;
    }

    img {
      align-self: unset;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1200px;

    div {
      min-width: 600px;
      max-width: 600px;
    }
  }
`;

const bigImage = css`
  max-width: 440px;
  height: auto;
  object-fit: contain;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 500px;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: unset;
  }
`;

const smallImage = css`
  max-width: 350px;
  height: auto;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 480px;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: unset;
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
  }
`;

export const StyledSecondArticle = styled.article`
  ${articleHelper};

  img {
    ${smallImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    justify-content: center;

    div {
      max-width: 400px;
      padding: 100px 30px 0 200px;
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
  }
`;

export const StyledFourthArticle = styled.article`
  ${articleHelper};
  margin-top: 30px;

  div {
    display: none;
  }

  img {
    ${smallImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-top: unset;

    div {
      display: initial;
    }
  }
`;

export const StyledFifthArticle = styled.article`
  ${articleHelper};

  img {
    ${bigImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;
  }
`;

export const StyledSixthArticle = styled.article`
  ${articleHelper};
`;

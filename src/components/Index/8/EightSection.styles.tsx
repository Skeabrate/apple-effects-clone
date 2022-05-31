import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background-color: black;
  color: white;
  overflow: hidden;

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
    padding-block: 140px;

    p {
      font-size: 1.9rem;
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.headingTablet};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    padding-block: 140px;
  }
`;

export const StyledInnerArticle = styled.div`
  padding: 60px 6vw;

  ${({ theme }) => theme.mq.tablet} {
    min-width: 400px;
    padding: 0px 10px 0 40px;
  }

  ${({ theme }) => theme.mq.desktop} {
    min-width: 600px;
    max-width: 600px;
  }
`;

const articleHelper = css`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  margin: 0px auto;

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

    img {
      align-self: unset;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1100px;
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

    img {
      z-index: 2;
    }
  }
`;

export const StyledSecondArticle = styled.article`
  ${articleHelper};

  img {
    ${smallImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    justify-content: flex-end;

    img {
      margin-top: -150px;
      z-index: 1;
      border: 1px solid #202020;
      border-right: none;
    }

    ${StyledInnerArticle} {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0px 100px 0 0px;

      p,
      h3 {
        width: 150px;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    img {
      margin-top: -250px;
    }

    ${StyledInnerArticle} {
      p,
      h3 {
        width: 270px;
      }
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

    ${StyledInnerArticle} {
      padding: 150px 10px 0 40px;
    }

    img {
      z-index: 0;
      margin-top: -40px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    img {
      margin-top: -120px;
    }
  }
`;

export const StyledFourthArticle = styled.article`
  ${articleHelper};
  margin-top: 30px;

  ${StyledInnerArticle} {
    display: none;
  }

  img {
    ${smallImage};
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-top: unset;

    img {
      z-index: 1;
      margin-top: -200px;
      max-width: 700px;
    }

    ${StyledInnerArticle} {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      min-width: 300px;
      max-width: 300px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    img {
      max-width: unset;
      margin-top: -300px;
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

    img {
      z-index: 2;
      margin-top: -100px;
    }

    ${StyledInnerArticle} {
      max-wdith: 350px;
      min-width: 350px;
      padding: 150px 10px 0 40px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    img {
      margin-top: -150px;
    }

    ${StyledInnerArticle} {
      max-wdith: 520px;
      min-width: 520px;
    }
  }
`;

export const StyledSixthArticle = styled.article`
  ${articleHelper};

  ${({ theme }) => theme.mq.tablet} {
    ${StyledInnerArticle} {
      padding: 0px 10px 0 40px;
      margin-top: -60px;
    }
  }
`;

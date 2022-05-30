import styled from 'styled-components';

interface Props {
  $isAlone?: boolean;
  $isSmall?: boolean;
}

export const Wrapper = styled.section`
  width: 100%;
  background-color: black;
  color: white;

  div {
    margin: 0 auto;
  }
`;

export const StyledArticle = styled.article`
  div:first-child {
    max-width: 440px;
    padding: 60px 6vw;
  }

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

  span {
    display: block;
  }
`;

export const StyledImage = styled.div<Props>`
  max-width: ${({ $isSmall }) => ($isSmall ? '400px' : '500px')};
  padding-top: ${({ $isAlone }) => ($isAlone ? '30px' : '0')};
`;

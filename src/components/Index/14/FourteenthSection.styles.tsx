import styled from 'styled-components';

export const Wrapper = styled.section``;

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.headingTablet};
  margin: 50px auto 20px;
  width: fit-content;

  ${({ theme }) => theme.mq.desktop} {
    font-size: 96px;
  }
`;

export const StyledFirstArticle = styled.article`
  background-color: #f5f5f7;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`;

export const StyledGridArticle = styled.article`
  background-color: #f5f5f7;
  font-weight: 500;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.greyText};
  }
`;

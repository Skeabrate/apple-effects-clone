import styled from 'styled-components';

export const Wrapper = styled.section``;

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.headingTablet};
  margin: 50px auto 20px;
  width: fit-content;

  ${({ theme }) => theme.mq.desktop} {
    font-size: 96px;
    margin: 120px auto 40px;
  }
`;

export const StyledFirstArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.grey3};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 30px;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.headingMobile};
    max-width: 232px;
    padding: 6px 0 18px;
  }

  img {
    max-width: 300px;
  }

  p {
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: 500;
    max-width: 250px;
  }

  svg {
    width: 36px;
    height: 36px;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 60px;
    padding-top: 60px;

    div {
      padding-top: 50px;
    }

    h3 {
      padding: 12px 0;
    }

    img {
      max-width: 400;
    }

    svg {
      width: 56px;
      height: 56px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: 120px;
    padding-top: 100px;

    div {
      padding-top: 80px;
    }

    h3 {
      font-size: 40px;
      line-height: 1;
      max-width: 400px;
    }

    p {
      max-width: unset;
    }

    img {
      max-width: unset;
    }
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  place-content: center;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, minmax(300px, 500px));
    margin: 0 24px;
  }
`;

export const StyledGridArticle = styled.article<{ $isLast: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey3};
  font-weight: 500;
  text-align: center;
  padding: ${({ $isLast }) => ($isLast ? '40px 0 0' : '40px 0')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 350px;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.headingMobile};
  }

  p {
    color: ${({ theme }) => theme.colors.grey1};
    padding: 0 10px;
    max-width: 340px;
    margin: 16px auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-column: ${({ $isLast }) => $isLast && '1 / 3'};

    img {
      max-width: unset;
    }
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
`;

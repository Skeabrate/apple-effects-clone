import styled from 'styled-components';

interface OpacityProps {
  $opacity: number;
}

export const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  overflow: hidden;
`;

export const StyledContent = styled.div<OpacityProps>`
  ${({ theme }) => theme.paddingMobile()};
  font-weight: 500;
  width: fit-content;
  margin: 5rem auto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  opacity: 1;

  div:first-child {
    color: #6e6e73;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  p {
    font-size: 24px;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    gap: 80px;

    div:first-child {
      max-width: 300px;
    }

    div:nth-child(2) {
      gap: 50px;
      max-width: 400px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    opacity: ${({ $opacity }) => $opacity};
  }
`;

import styled from 'styled-components';

interface OpacityProps {
  $opacity: number;
}

export const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const StyledContent = styled.div<OpacityProps>`
  ${({ theme }) => theme.paddingMobile()};
  font-weight: 500;
  width: fit-content;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  opacity: 1;

  div:first-child {
    color: ${({ theme }) => theme.colors.grey1};
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  p {
    ${({ theme }) => theme.fontSize.font24()};
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

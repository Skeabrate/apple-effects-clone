import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-weight: 500;
  padding: 40px 20px;
  margin: 60px 20px;
  background-color: #f5f5f7;
  ${({ theme }) => theme.fontSize.font24()};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 100px;
    border: 2px solid ${({ theme }) => theme.colors.black};
    font-weight: 600;
    ${({ theme }) => theme.fontSize.paragraphMobile};

    svg {
      width: 18px;
      height: 18px;

      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    ${({ theme }) => theme.fontSize.font40()};
    align-items: center;
    padding: 100px;
    gap: 50px;

    p {
      width: 400px;
      text-align: center;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 950px;
    margin: 12rem auto;
  }
`;

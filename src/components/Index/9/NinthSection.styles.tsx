import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  overflow: hidden;
`;

export const StyledHeader = styled.header`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  padding: 0 5vw;

  p {
    margin-top: 20px;
    font-weight: 500;
    font-size: 3rem;

    span {
      display: block;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 10rem auto;

    p {
      align-self: flex-end;
      font-size: 3rem;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 15rem auto;

    p {
      font-size: 4rem;
      margin-top: 4rem;
    }
  }
`;

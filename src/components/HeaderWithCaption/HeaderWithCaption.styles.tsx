import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  ${({ theme }) => theme.paddingMobile()};

  p {
    margin-top: 20px;
    font-weight: 500;
    ${({ theme }) => theme.fontSize.font32()};

    span {
      display: block;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 10rem auto;

    p {
      align-self: flex-end;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 15rem auto;

    p {
      ${({ theme }) => theme.fontSize.font40()};
      margin-top: 4rem;
    }
  }
`;

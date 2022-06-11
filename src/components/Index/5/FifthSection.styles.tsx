import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background: white;
  gap: 3rem;
  padding: 6rem 2rem;

  img {
    width: 300px;
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column-reverse;
    justify-content: flex-end;
    height: 650px;
    overflow: hidden;

    img {
      width: 600px;
      height: auto;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 900px;
    gap: 5rem;
    padding: 10rem 2rem;

    img {
      width: unset;
    }
  }
`;

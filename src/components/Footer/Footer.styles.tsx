import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: 300px;
  padding: 0 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  h2 {
    margin: 8px 0 30px;
  }

  svg {
    height: 36px;
    width: 36px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: black;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;

    svg {
      path {
        transition: all 0.2s ease-in-out;
      }
    }

    &:hover svg path {
      fill: #e06040;
    }
  }
`;

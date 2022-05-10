import styled from 'styled-components';

export const StyledFirstSection = styled.section`
  /* background-image: url('/images/Screenshot_1.png'); */
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 120vh;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 190px;
    left: 35%;
    width: 200px;
    height: 300px;
    background: darkgreen;
  }
`;

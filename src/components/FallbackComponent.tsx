import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const FallbackComponent = () => {
  return (
    <Wrapper>
      <h1>Loading</h1>
    </Wrapper>
  );
};

export default FallbackComponent;

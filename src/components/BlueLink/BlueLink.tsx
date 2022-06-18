import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a<{ $isDark: boolean }>`
  color: ${({ $isDark }) => ($isDark ? '#2997ff' : '#06c')};
  text-decoration: none;

  svg {
    margin-left: 4px;
    height: 12px;
    width: 12px;

    path {
      fill: ${({ $isDark }) => ($isDark ? '#2997ff' : '#06c')};
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  label: string;
  isDark?: boolean;
}

const BlueLink: React.FC<Props> = ({ label, isDark = false }) => {
  return (
    <StyledLink $isDark={isDark} href='#'>
      {label}
      <span>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
        </svg>
      </span>
    </StyledLink>
  );
};

export default BlueLink;

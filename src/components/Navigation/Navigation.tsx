import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 320px;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.grey};

  svg {
    height: 24px;
    width: 24px;
    transform: scale(0.7);
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.grey};
      transition: all 0.2s ease-in-out;
    }

    &:hover path {
      fill: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 44px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: 300;
  letter-spacing: 0.3px;
  height: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: black;
  top: 48px;
  width: 100%;
  list-style: none;

  ${({ theme }) => theme.mq.desktop} {
    position: initial;
    background-color: transparent;
    flex-direction: row;
    width: unset;
  }

  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    margin-left: 2.05vw;

    &:last-child {
      margin-right: 2.05vw;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

const Hamburger = styled.button`
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <Wrapper>
      <StyledNav>
        <Hamburger onClick={handleToggle}>hamburger</Hamburger>

        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path d='M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z' />
        </svg>

        <StyledList>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Hove</li>
          <li>Only on Apple</li>
          <li>Accessories</li>
          <li>Support</li>
          <li>
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fill-rule='evenodd'
              clip-rule='evenodd'
            >
              <path d='M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z' />
            </svg>
          </li>
        </StyledList>

        <svg
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fill-rule='evenodd'
          clip-rule='evenodd'
        >
          <path d='M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z' />
        </svg>
      </StyledNav>
    </Wrapper>
  );
};

export default Navigation;

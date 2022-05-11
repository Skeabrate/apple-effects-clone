import React, { useState, useRef, useEffect } from 'react';
import {
  Hamburger,
  StyledBagButton,
  StyledBarInner,
  StyledBarOpenButton,
  StyledBarOptions,
  StyledBarOuter,
  StyledNavInner,
  StyledNavOuter,
  StyledSearch,
  StyledSupport,
  StyledList,
  Wrapper,
  StyledBarHideMenu,
  StyledDarkBackground,
} from './Navigation.styles';

const Navigation = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [barOptionsToggle, setBarOptionsToggle] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<number>(0);

  const barRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (toggle) {
      document.body.setAttribute('style', 'overflow:unset; height:unset');
      document
        .getElementsByTagName('html')[0]
        .setAttribute('style', 'overflow:unset; height:unset');
    } else {
      document.body.setAttribute('style', 'overflow:hidden !important; height:100vh !important');
      document
        .getElementsByTagName('html')[0]
        .setAttribute('style', 'overflow:hidden !important; height:100vh !important');
    }
    setToggle(!toggle);
  };

  const handleBarOptionsToggle = () => setBarOptionsToggle(!barOptionsToggle);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      let lastScroll;
      if (barOptionsToggle) lastScroll = isSticky;
      if (isSticky !== lastScroll) setBarOptionsToggle(false);
      setIsSticky(window.scrollY);
    });
  }, []);

  return (
    <>
      <Wrapper>
        <StyledNavOuter $toggle={toggle} ref={barRef}>
          <StyledNavInner>
            <Hamburger onClick={handleToggle}>
              <div>
                <span></span>
                <span></span>
              </div>
            </Hamburger>

            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z' />
            </svg>

            <StyledList $toggle={toggle}>
              <li>
                <span>Store</span>
              </li>
              <li>
                <span>Mac</span>
              </li>
              <li>
                <span>iPad</span>
              </li>
              <li>
                <span>iPhone</span>
              </li>
              <li>
                <span>Watch</span>
              </li>
              <li>
                <span>AirPods</span>
              </li>
              <li>
                <span>TV & Hove</span>
              </li>
              <li>
                <span>Only on Apple</span>
              </li>
              <li>
                <span>Accessories</span>
              </li>
              <StyledSupport>
                <span>Support</span>
              </StyledSupport>
              <StyledSearch $toggle={toggle}>
                <div>
                  <svg
                    width='24'
                    height='24'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  >
                    <path d='M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z' />
                  </svg>
                  <p>Search apple.com</p>
                </div>
              </StyledSearch>
            </StyledList>

            <StyledBagButton $toggle={toggle}>
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
              >
                <path d='M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z' />
              </svg>
            </StyledBagButton>
          </StyledNavInner>
        </StyledNavOuter>

        <StyledBarOuter $isSticky={isSticky} $barOptionsToggle={barOptionsToggle}>
          <StyledBarInner $barOptionsToggle={barOptionsToggle}>
            <h2>iPhone 13 Pro</h2>

            <StyledBarOptions>
              <StyledBarOpenButton
                $barOptionsToggle={barOptionsToggle}
                onClick={handleBarOptionsToggle}
              >
                <span></span>
                <span></span>
              </StyledBarOpenButton>

              <StyledBarHideMenu $barOptionsToggle={barOptionsToggle}>
                <p>Przegląd</p>
                <button>Dane techniczne</button>
              </StyledBarHideMenu>

              <button>Kup</button>
            </StyledBarOptions>
          </StyledBarInner>
        </StyledBarOuter>
      </Wrapper>
      <StyledDarkBackground
        $barOptionsToggle={barOptionsToggle}
        onClick={() => setBarOptionsToggle(false)}
      />
    </>
  );
};

export default Navigation;

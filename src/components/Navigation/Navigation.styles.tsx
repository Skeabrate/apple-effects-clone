import styled from 'styled-components';

interface NavProps {
  readonly $toggle: boolean;
}

export const Wrapper = styled.div`
  min-width: 320px;
  width: 100%;
`;

export const StyledNavOuter = styled.nav<NavProps>`
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme, $toggle }) => ($toggle ? 'black' : theme.colors.dark)};
  transition: background-color ease-in-out;
  transition-duration: ${({ $toggle }) => ($toggle ? '.2s' : '.3s')};
  transition-delay: ${({ $toggle }) => ($toggle ? '0' : '0.4s')};

  ${({ theme }) => theme.mq.tablet} {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const StyledNavInner = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  max-width: 980px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.paragraph};

  svg {
    height: 24px;
    width: 24px;
    transform: scale(0.75);
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.grey};
      transition: all 0.2s ease-in-out;
    }

    &:hover path {
      fill: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 44px;
    padding: 0 20px;
    font-size: ${({ theme }) => theme.fontSize.caption};
    letter-spacing: 0.3px;
  }
`;

export const StyledList = styled.ul<NavProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: black;
  top: 48px;
  width: 100%;
  list-style: none;
  overflow: hidden;
  height: ${({ $toggle }) => ($toggle ? 'calc(100% - 48px)' : '0')};
  transition: all ease-in-out;
  transition-duration: ${({ $toggle }) => ($toggle ? '.5s' : '.6s')};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ $toggle }) => ($toggle ? '1' : '1')};
    visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'visible')};
    transition: opacity 0.1s ease-in-out;
    transition-delay: ${({ $toggle }) => ($toggle ? '.3s' : '0')};
    box-shadow: inset 0px -300px 300px -250px rgba(0, 0, 0, 1);
  }

  li {
    cursor: pointer;
    display: flex;
    padding: 0 44px;
    transform: ${({ $toggle }) => ($toggle ? 'translateY(0)' : 'translateY(-45px)')};
    transition: all ease-in-out;
    transition-delay: ${({ $toggle }) => ($toggle ? '0s' : '0.2s')};
    transition-duration: ${({ $toggle }) => ($toggle ? '.25s' : '.4s')};

    span {
      width: 100%;
      padding: 14px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    position: initial;
    background-color: transparent;
    padding: 0;
    height: unset;
    flex-direction: row;
    justify-content: space-evenly;

    &::after {
      display: none;
    }

    li {
      justify-content: center;
      align-items: center;
      padding: 0;
      transform: unset;

      span {
        width: unset;
        border: none;
        padding: 0;
      }
    }
  }
`;

export const StyledSupport = styled.li`
  span {
    border: none !important;
  }
`;

export const StyledSearch = styled.li<NavProps>`
  order: -1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
  padding: 0 14px 20px 14px !important;
	transform-origin: top;
	transform: ${({ $toggle }) => ($toggle ? ' scaleY(100%)' : ' scaleY(0)')} !important;
	transition-delay: ${({ $toggle }) => ($toggle ? '0s' : '0.2s')} !important;
	transition-duration: ${({ $toggle }) => ($toggle ? '.25s' : '.35s')} !important;

  div {
    background-color: #202020;
    width: 100%;
    padding: 6px 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;

    p {
      color: ${({ $toggle }) => ($toggle ? '#666666' : '#202020')};
			transition: all ease-in-out;
			transition-duration: .2s;
			transition-delay: ${({ $toggle }) => ($toggle ? '0.1s' : '0.2s')};
      margin-left: 6px;
    }

		svg path{
			fill: ${({ $toggle }) => ($toggle ? '#666666' : '#202020')};
			transition: all ease-in-out;
			transition-duration: .2s;
			transition-delay: ${({ $toggle }) => ($toggle ? '0.1s' : '0.2s')};
		}
  }

  ${({ theme }) => theme.mq.tablet} {
    order: unset;
    border: unset;
		padding: 0 !important;
		transform: unset;

		div {
    background-color: transparent;
    width:unset;
    padding: 0
    border-radius: 0;

    p {
      display: none;
    }

		svg path{
			fill: ${({ theme }) => theme.colors.grey};
		}
  }
`;

export const Hamburger = styled.button`
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    align-items: center;

    span {
      display: block;
      height: 1px;
      width: 18px;
      background-color: ${({ theme }) => theme.colors.grey};
      transition: all 0.25s ease-in-out;
    }
  }

  &:hover div span {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledBarOuter = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

export const StyledBarInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding: 13px 20px;

  h2 {
    font-size: 2.3rem;
    letter-spacing: -0.4px;
  }

  div {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 25px;

    p {
      color: #b1b1b1;
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;

      &:first-of-type {
        color: #3d3d3d;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: #0071e3;
        }
      }

      &:last-child {
        background-color: #0071e3;
        border-radius: 100px;
        padding: 5px 12px;
        color: white;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #2787e7;
        }
      }
    }
  }
`;

export const StyledBagButton = styled.button<NavProps>`
  cursor: pointer;
  width: 60px;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  height: 100%;
  transform: ${({ $toggle }) => ($toggle ? 'translateY(4px)' : 'translateY(0)')};
  opacity: ${({ $toggle }) => ($toggle ? 0 : 1)};

  transition: all 0.4s ease-in-out;

  transition-delay: ${({ $toggle }) => ($toggle ? '0' : '0.3s')};

  ${({ theme }) => theme.mq.tablet} {
    width: unset;
    transform: unset;
    opacity: 1;
  }
`;

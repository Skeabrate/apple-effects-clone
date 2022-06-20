import styled from 'styled-components';

interface Props {
  paralaxIsActive: boolean;
  paralaxIsOnTop: boolean;
}

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.grey2};
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const StyledContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.headingMobile};
  font-weight: 500;
  line-height: 1.1;
  max-width: 690px;
  margin: 0 auto;
  padding: 15rem 4rem 30rem 4rem;

  span {
    color: ${({ theme }) => theme.colors.black};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.headingTablet};
    padding: 25rem 4rem 60rem 4rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.heading};
    letter-spacing: ${({ theme }) => theme.letterSpacing.heading};
    max-width: 1050px;
    padding: 35rem 4rem 85rem 4rem;
  }
`;

export const StyledHelperUp = styled.div`
  position: absolute;
  top: 184px;
  left: 0;
  width: 100%;
  height: calc(100% - 150px - 184px);

  ${({ theme }) => theme.mq.tablet} {
    top: 408px;
    height: calc(100% - 290px - 408px);
  }

  ${({ theme }) => theme.mq.desktop} {
    top: 566px;
    height: calc(100% - 400px - 566px);
  }
`;

export const StyledHelperDown = styled.div`
  position: absolute;
  bottom: 150px;
  left: 0;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    bottom: 290px;
  }
  ${({ theme }) => theme.mq.desktop} {
    bottom: 400px;
  }
`;

export const StyledImage = styled.div<Props>`
  width: 100%;
  position: ${({ paralaxIsActive }) => (paralaxIsActive ? 'fixed' : 'absolute')};
  top: ${({ paralaxIsOnTop, paralaxIsActive }) => {
    if (paralaxIsActive) return 'unset';
    else if (paralaxIsOnTop) return '0';
  }};
  bottom: ${({ paralaxIsOnTop, paralaxIsActive }) => {
    if (paralaxIsActive) return '0';
    else if (paralaxIsOnTop) return 'unset';
    else return '150px';
  }};
  left: 0;

  img {
    position: relative;
    height: 180px;
    width: auto;
    margin-left: -252.5px;
    left: 50%;
    top: 90px;
  }

  ${({ theme }) => theme.mq.tablet} {
    bottom: ${({ paralaxIsOnTop, paralaxIsActive }) => {
      if (paralaxIsActive) return '0';
      else if (paralaxIsOnTop) return 'unset';
      else return '290px';
    }};

    img {
      height: 405px;
      margin-left: -534px;
      top: 210px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    bottom: ${({ paralaxIsOnTop, paralaxIsActive }) => {
      if (paralaxIsActive) return '0';
      else if (paralaxIsOnTop) return 'unset';
      else return '400px';
    }};

    img {
      top: 290px;
      height: unset;
      margin-left: -791px;
    }
  }
`;

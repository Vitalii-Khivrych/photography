import styled from 'styled-components';
import Link from 'next/link';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  text-align: center;
  background-color: #f2f2f2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  align-items: center;

  margin: 20px 0;
`;

export const NameLink = styled(Link)`
  font-family: ${p => p.theme.fonts.name};
  font-size: 14px;

  color: #887b7b;
  margin-right: 30px;

  display: flex;
  align-items: center;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 18px;
    margin-right: 0;
  }
`;

export const Name = styled.span`
  display: block;
  font-family: ${p => p.theme.fonts.name};
  font-size: 20px;

  text-transform: uppercase;
  margin-right: 8px;
  word-wrap: break-word;

  color: #5b5858;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 26px;
    margin-right: 12px;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  background: ${p => p.theme.colors.mobileMenuBackground};
  box-shadow: 0px 4px 8px rgb(0 0 0 / 4%), 0px 2px 4px rgb(0 0 0 / 8%),
    0px 1px 3px rgb(0 0 0 / 16%);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;

  transform: translateX(0);
  transition: transform 500ms, visibility 500ms ease-in-out;
`;

export const WrapperAfter = styled.div`
  padding: 0 40px;
`;

// opacity: 0;
// pointer-events: none;
// visibility: hidden;

export const MobileMenuBtnWrapper = styled.div`
  position: relative;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 69px;
    height: 2px;
    width: 100%;
    background-color: white;
  }
`;

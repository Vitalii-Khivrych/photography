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

  align-items: center;

  margin: 20px;
`;

export const NameLink = styled(Link)`
  font-family: ${p => p.theme.fonts.name};
  font-size: 18px;
  color: #887b7b;

  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  font-family: ${p => p.theme.fonts.name};
  font-size: 26px;
  /* font-weight: bold; */
  text-transform: uppercase;

  color: #5b5858;
  /* -webkit-text-stroke: 1px #ba5d0a; */

  margin-right: 12px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const LinkStyled = styled(Link)`
  font-family: ${p => p.theme.fonts.nav};
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #121010;

  text-transform: uppercase;
  transition-property: color;
  transition-duration: 250ms;

  &.active {
    color: #e01a20;
    font-weight: 700;
  }

  &:hover {
    color: #dc5e23;
  }
`;

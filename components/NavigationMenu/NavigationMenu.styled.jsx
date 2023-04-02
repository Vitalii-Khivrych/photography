import styled from 'styled-components';
import Link from 'next/link';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const NavItem = styled.li`
  position: relative;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-of-type)::after {
    content: '';
    display: block;
    position: absolute;
    top: 69px;
    height: 2px;
    width: 100%;
    background-color: white;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: inherit;
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }

    &:not(:last-of-type)::after {
      display: none;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
  }
`;

export const LinkStyled = styled(Link)`
  font-family: ${p => p.theme.fonts.nav};
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #121010;

  text-transform: uppercase;
  transition-property: color;
  transition-duration: 250ms;

  &.active {
    color: ${p => p.theme.colors.active};
    font-weight: 700;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 12px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    font-size: 14px;
  }
`;

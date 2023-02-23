import styled from 'styled-components';
import Link from 'next/link';

export const HeaderStyled = styled.header`
  text-align: center;
  background-color: #0abab5;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  align-items: center;

  margin: 20px;
`;

export const NameLink = styled(Link)`
  font-size: 18px;

  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;

  color: #ffd700;
  -webkit-text-stroke: 1px #ba5d0a;

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
  font-size: 16px;
  font-weight: 500;

  &.active {
    color: #ba0a0f;
  }
`;

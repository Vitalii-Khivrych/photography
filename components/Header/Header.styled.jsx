import styled from 'styled-components';
import Link from 'next/link';

export const HeaderStyled = styled.header`
  text-align: center;
  background-color: #a2c5c7;
`;

export const Wrapper = styled.div`
  margin: 20px;
`;

export const NameLink = styled(Link)`
  font-size: 48px;
`;

export const Title = styled.h2`
  font-size: 18px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;

  margin-left: 20px;
`;

export const NavItem = styled.li`
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const LinkStyled = styled(Link)`
  &.active {
    color: red;
  }
`;

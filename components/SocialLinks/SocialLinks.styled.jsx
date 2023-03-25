import Link from 'next/link';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-right: 16px;
  }
`;

export const LinkStyled = styled(Link)`
  width: 36px;
  height: 36px;
  color: ${p => p.theme.colors.footerText};
  background: ${p => p.theme.colors.footerBackground};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.footerText};

  transition-property: background-color, color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.footerText};
    color: ${p => p.theme.colors.footerBackground};
  }
`;

export const Svg = styled.svg`
  fill: currentColor;

  width: 20px;
  height: 20px;
`;

import styled from 'styled-components';

export const OpenBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.width || '50px'};
  height: ${p => p.height || '50px'};

  color: ${p => (p.open ? p.theme.colors.footerText : 'white')};
  background: transparent;

  transition-property: background-color, color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 0 auto;
    display: none;
  }
`;

export const Svg = styled.svg`
  fill: currentColor;

  width: 40px;
  height: 40px;
`;

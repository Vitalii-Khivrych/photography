import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 20px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 0;
  }
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.nav};
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 12px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    font-size: 14px;
  }
`;

export const Contact = styled.p`
  font-family: ${p => p.theme.fonts.text};
  font-weight: 400;
  font-size: 10px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 12px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    font-size: 14px;
  }
`;

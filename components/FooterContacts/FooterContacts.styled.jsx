import styled from 'styled-components';

export const List = styled.ul``;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.nav};
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Contact = styled.p`
  font-family: ${p => p.theme.fonts.text};
  font-weight: 400;
  font-size: 14px;

  /* line-height: 1.5; */
`;

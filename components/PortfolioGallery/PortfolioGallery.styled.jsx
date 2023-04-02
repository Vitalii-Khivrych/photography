import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
  margin: 0 auto;
  background: #f2f2f2;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  grid-auto-flow: dense;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-auto-rows: 300px;
  }
`;

const Item = styled.li`
  /* height: 560px; */

  overflow: hidden;

  box-shadow: 0 3px 25px -5px rgb(0 0 0 / 12%);
  border-radius: 4px;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    box-shadow: 0 6px 12px #141414;
  }
`;

export const V_stretch = styled(Item)`
  grid-row: span 2;
`;

export const H_stretch = styled(Item)`
  grid-column: span 2;
  grid-row: span 1.5;
`;

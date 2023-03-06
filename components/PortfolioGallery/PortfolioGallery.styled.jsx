import styled from 'styled-components';

export const List = styled.ul`
  /* display: grid;

  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
  margin: 0px auto;
  padding: 40px 0; */

  padding: 10px;
  margin: 0 auto;
  background: #f2f2f2;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-auto-rows: 300px;
  grid-auto-flow: dense;
`;

const Item = styled.li`
  /* height: 560px; */

  overflow: hidden;

  box-shadow: 0 3px 25px -5px rgb(0 0 0 / 12%);
  border-radius: 4px;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover {
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

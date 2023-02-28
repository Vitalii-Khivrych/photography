import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  background: #f2f2f2;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
`;

export const V_stretch = styled.div`
  grid-row: span 2;
`;

export const H_stretch = styled.div`
  grid-column: span 2;
`;

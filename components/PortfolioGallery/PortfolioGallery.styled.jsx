import styled from 'styled-components';

export const List = styled.ul`
  display: grid;

  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
  margin: 0px auto;
`;

export const Item = styled.li`
  height: 560px;

  box-shadow: 0 3px 25px -5px rgb(0 0 0 / 12%);
  border-radius: 2px;
  border: 1px solid #eee;
`;

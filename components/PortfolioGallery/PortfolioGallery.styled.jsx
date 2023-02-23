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

  overflow: hidden;

  box-shadow: 0 3px 25px -5px rgb(0 0 0 / 12%);
  border-radius: 16px;
  border: 3px solid #ffd700;
`;

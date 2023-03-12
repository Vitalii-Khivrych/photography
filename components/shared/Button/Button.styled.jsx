import styled from 'styled-components';

export const Btn = styled.button`
  position: ${p => p.width || 'relative'};
  /* position: absolute; */

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  background-color: lightseagreen;
  border-radius: 5px;

  width: ${p => p.width || '150px'};
  height: ${p => p.height || '50px'};
`;

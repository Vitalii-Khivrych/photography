import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  overflow: hidden;

  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 0px auto;
`;

export const Item = styled.li`
  overflow: hidden;
  background-color: white;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px 4px 4px 4px;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover {
    box-shadow: 0 10px 26px #141414;
  }
`;

export const ImageWrapper = styled.div`
  /* width: 420px; */

  height: 560px;
`;

export const Title = styled.h2`
  font-size: 26px;

  padding: 10px;

  text-align: center;
`;

export const Text = styled.p`
  font-size: 20px;

  padding: 10px;
`;

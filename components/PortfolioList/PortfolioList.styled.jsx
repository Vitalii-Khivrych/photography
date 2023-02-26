import styled from 'styled-components';

export const List = styled.ul`
  display: grid;

  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 0px auto;
`;

export const Item = styled.li`
  overflow: hidden;
  background-color: #cdfcfb;

  box-shadow: 0 3px 25px -5px rgb(0 0 0 / 12%);
  border-radius: 16px;
  /* border: 3px solid #ffd700; */
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

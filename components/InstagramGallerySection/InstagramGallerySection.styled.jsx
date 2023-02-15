import Link from 'next/link';
import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 28px;
  text-align: center;

  margin-bottom: 16px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  /* objectFit: 'cover',
                width: '100% ',
                display: 'block',
                height: '100%', */

  box-shadow: 0 3px 25px -5px rgb(0 0 0 / 12%);
  border-radius: 2px;
  border: 1px solid #eee;
`;

export const LinkInstagram = styled(Link)`
  height: 300px;
`;

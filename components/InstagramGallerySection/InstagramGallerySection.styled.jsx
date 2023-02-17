import Link from 'next/link';
import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 22px;
  text-align: center;

  margin-bottom: 16px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  /* objectFit: 'cover',
                width: '100% ',
                display: 'block',
                height: '100%', */

  box-shadow: 0 3px 25px -5px rgb(0 0 0 / 12%);
  border-radius: 2px;
  border: 1px solid #eee;

  margin-bottom: 12px;
`;

export const LinkInstagram = styled(Link)`
  height: 300px;
`;

export const AddressLink = styled.a`
  display: block;
  font-size: 24px;
  text-align: center;
`;

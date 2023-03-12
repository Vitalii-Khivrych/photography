import Image from 'next/image';
import Link from 'next/link';

import { List, Item, ImageWrapper, Title } from './GalleryList.styled';

import { data } from '@/data/galleries';

export const GalleryList = () => {
  return (
    <List>
      {data.map(({ id, name, smallImage }) => {
        return (
          <Item key={id}>
            <Link href={`/portfolio/${id}`}>
              <ImageWrapper>
                <Image
                  src={smallImage}
                  alt={name}
                  width={200}
                  height={300}
                  style={{
                    objectFit: 'cover',
                    width: '100% ',
                    display: 'block',
                    height: '100%',
                  }}
                />
              </ImageWrapper>

              <Title>{name}</Title>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

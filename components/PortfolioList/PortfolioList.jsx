import Image from 'next/image';
import Link from 'next/link';

import { List, Item, ImageWrapper, Title, Text } from './PortfolioList.styled';

import { data } from '@/data/portfolioGalleryList';

export const PortfolioList = () => {
  return (
    <List>
      {data.map(({ id, name, href }) => {
        return (
          <Item key={id}>
            <Link href={`/portfolio/${id}`}>
              <ImageWrapper>
                <Image
                  src={href}
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
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                incidunt eius dolor! Quasi, expedita modi nesciunt doloribus
                incidunt, fuga, aliquam dolores minus aliquid harum quos
                perferendis facilis optio ratione ullam.
              </Text>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

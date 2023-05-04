import Image from 'next/image';
import Link from 'next/link';

import { List, Item, ImageWrapper, Title, Text } from './PortfolioList.styled';

import { data } from '@/data/galleries';

export const PortfolioList = () => {
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
                  width={300}
                  height={400}
                  quality={100}
                  style={{
                    objectFit: 'cover',
                    borderRadius: ' 4px 4px 0px 0px',
                    width: '100% ',
                    display: 'block',
                    height: '100%',
                  }}
                />
              </ImageWrapper>

              <Title>{name}</Title>
              {/* <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                incidunt eius dolor! Quasi, expedita modi nesciunt doloribus
                incidunt, fuga, aliquam dolores minus aliquid harum quos
                perferendis facilis optio ratione ullam.
              </Text> */}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

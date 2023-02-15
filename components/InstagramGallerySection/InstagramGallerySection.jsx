import Image from 'next/image';

import { Container, Section } from '@/components';
import {
  Title,
  List,
  Item,
  LinkInstagram,
} from './InstagramGallerySection.styled';

const data = [
  { path: '/images/instagramGallery/IMG_9054.jpg' },
  { path: '/images/instagramGallery/IMG_9130.jpg' },
  { path: '/images/instagramGallery/IMG_9216.jpg' },
  { path: '/images/instagramGallery/IMG_9254.jpg' },
];

export const InstagramGallerySection = () => {
  return (
    <Section>
      <Container>
        <Title>my work in instagram</Title>
        <List>
          {data.map(({ path }) => (
            <Item key={path}>
              <LinkInstagram href="#">
                <Image
                  src={path}
                  alt="instagram photo"
                  width={250}
                  height={350}
                  style={{
                    objectFit: 'cover',
                    width: '100% ',
                    display: 'block',
                    height: '100%',
                  }}
                />
              </LinkInstagram>
            </Item>
          ))}
        </List>

        <a href="#">@marina</a>
      </Container>
    </Section>
  );
};

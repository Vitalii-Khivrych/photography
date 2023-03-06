import Image from 'next/image';

import { Container, Section } from '@/components';
import {
  Title,
  List,
  Item,
  LinkInstagram,
  AddressLink,
} from './InstagramGallerySection.styled';
import { instagramPhoto } from '@/data/instagramPhoto';

export const InstagramGallerySection = () => {
  return (
    <Section>
      <Container>
        <Title>My work in instagram</Title>
        <List>
          {instagramPhoto.map(({ path }) => (
            <Item key={path}>
              <LinkInstagram href="'https://instagram.com/maradonna.311?igshid=YmMyMTA2M2Y='">
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

        <AddressLink href="'https://instagram.com/maradonna.311?igshid=YmMyMTA2M2Y='">
          @marina
        </AddressLink>
      </Container>
    </Section>
  );
};

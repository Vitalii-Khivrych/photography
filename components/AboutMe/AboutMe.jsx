import { Container, Section } from '@/components';
import Image from 'next/image';

import {
  Wrapper,
  Box,
  TextSection,
  Title,
  Name,
  Text,
  ImageWrapper,
} from './AboutMe.styled';

export const AboutMe = () => {
  return (
    <Section top="60px" bottom="60px">
      <Container>
        <Wrapper>
          <ImageWrapper>
            <Image
              src="/images/marina-about.jpg"
              alt="Photographer photo"
              width={200}
              height={200}
              style={{
                objectFit: 'cover',
                width: '100% ',
                display: 'block',
                height: '100%',
              }}
              // sizes="(max-width: 768px) 100vw,
              // (max-width: 1200px) 50vw,
              // 33vw"
            />
          </ImageWrapper>
          <Box>
            <TextSection>About me</TextSection>
            <Title>ABOUT | Marina Khivrich PHOTOGRAPHY</Title>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum illo sit, adipisci illum quo delectus pariatur impedit
              voluptas aliquam expedita soluta modi cupiditate laboriosam
              nesciunt aliquid omnis atque officia, assumenda perferendis autem
              aperiam. Doloribus neque asperiores ipsam nesciunt explicabo.
              Aperiam, aliquid animi! Incidunt maiores quam, distinctio neque
              nihil sit illum?
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum illo sit, adipisci illum quo delectus pariatur impedit
              voluptas aliquam expedita soluta modi cupiditate laboriosam
              nesciunt aliquid omnis atque officia, assumenda perferendis autem
              aperiam.
            </Text>
          </Box>
        </Wrapper>
      </Container>
    </Section>
  );
};

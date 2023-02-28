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
} from './AboutMeHome.styled';

export const AboutMeHome = () => {
  return (
    <Section top="90px" bottom="90px">
      <Container>
        <Wrapper>
          <Box>
            <TextSection>About me</TextSection>
            <Title>
              Photographer in London <br />
              <Name>Marina Khivrich</Name>
            </Title>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum illo sit, adipisci illum quo delectus pariatur impedit
              voluptas aliquam expedita soluta modi cupiditate laboriosam
              nesciunt aliquid omnis atque officia, assumenda perferendis autem
              aperiam. Doloribus neque asperiores ipsam nesciunt explicabo.
              Aperiam, aliquid animi! Incidunt maiores quam, distinctio neque
              nihil sit illum?
            </Text>
          </Box>
          <ImageWrapper>
            <Image
              src="/images/my-photo.jpg"
              alt="Photographer photo"
              // fill
              // width={200}
              // height={300}
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
        </Wrapper>
      </Container>
    </Section>
  );
};

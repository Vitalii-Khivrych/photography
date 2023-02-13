import { Button, Container, HeroSection } from '@/components';
import { Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection top="200px" bottom="200px">
      <Container>
        <Title>Marina Khivrich photographer</Title>
        <Button type="button" text="Contact me" />
      </Container>
    </HeroSection>
  );
};

import { Container, FooterContacts, SocialLinks } from '@/components';
import { Name } from '../Header/Header.styled';
import { FooterStyled, Wrapper, PhotographerName } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Wrapper>
          <PhotographerName>Marina Khivrych</PhotographerName>
          <SocialLinks />
          <FooterContacts />
        </Wrapper>
      </Container>
    </FooterStyled>
  );
};

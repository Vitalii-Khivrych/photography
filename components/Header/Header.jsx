import { useRouter } from 'next/router';

import {
  HeaderStyled,
  Wrapper,
  NameLink,
  Title,
  NavList,
  NavItem,
  LinkStyled,
} from './Header.styled';
import { Container } from '@/components';

const data = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'About', href: '/about' },
  { id: 3, text: 'Portfolio', href: '/portfolio' },
  { id: 4, text: 'Contacts', href: '/contacts' },
];

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <NameLink href="/" rel="noreferrer noopener">
            Marina Khivrich
          </NameLink>
          <Title>Photography</Title>
        </Wrapper>
        <nav>
          <NavList>
            {data.map(({ id, text, href }) => (
              <NavItem key={id}>
                <LinkStyled
                  href={href}
                  className={router.pathname === `${href}` ? 'active' : ''}
                >
                  {text}
                </LinkStyled>
              </NavItem>
            ))}
          </NavList>
        </nav>
      </Container>
    </HeaderStyled>
  );
};

// export default Header;

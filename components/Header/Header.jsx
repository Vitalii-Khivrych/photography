import { useRouter } from 'next/router';

import {
  HeaderStyled,
  Wrapper,
  NameLink,
  Name,
  NavList,
  NavItem,
  LinkStyled,
} from './Header.styled';
import { Container } from '@/components';
import Image from 'next/image';

const data = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'About', href: '/about' },
  { id: 3, text: 'Portfolio', href: '/portfolio' },
  // { id: 4, text: 'Contacts', href: '/contacts' },
];

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <NameLink href="/" rel="noreferrer noopener">
            <Name> Marina Khivrich</Name>
            <Image
              src="/images/support-ukraine.png"
              alt="Support Ukraine"
              width={32}
              height={28.5}
              // unoptimized
              style={{
                marginRight: '12px',
                animation:
                  'lds-heart 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) infinite',
              }}
            />
            Photography
          </NameLink>
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
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};

// export default Header;

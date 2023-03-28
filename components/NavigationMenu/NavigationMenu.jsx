import { useRouter } from 'next/router';

import { NavList, NavItem, LinkStyled } from './NavigationMenu.styled';
import { navigation } from '@/data/navigation';

export const NavigationMenu = () => {
  const router = useRouter();

  return (
    <nav>
      <NavList>
        {navigation.map(({ id, text, href }) => (
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
  );
};

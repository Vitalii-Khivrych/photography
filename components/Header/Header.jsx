import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  HeaderStyled,
  Wrapper,
  NameLink,
  Name,
  MobileMenu,
  MobileMenuBtnWrapper,
} from './Header.styled';
import { Container, NavigationMenu, MobMenuBtn } from '@/components';

export const Header = () => {
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);

  const { width } = useMediaQuery();
  const breakpoint = 768;
  const isMobile = width < breakpoint;

  const openModal = () => {
    setIsOpenMobMenu(true);
  };
  const closeModal = () => {
    setIsOpenMobMenu(false);
  };
  // ----------------
  const router = useRouter();

  useEffect(() => {
    closeModal();
  }, [router.pathname]);

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <NameLink href="/" rel="noreferrer noopener">
            <Name> Marina Khivrych</Name>
            <Image
              src="/images/support-ukraine.png"
              alt="Support Ukraine"
              width={32}
              height={28}
              style={{
                marginRight: '12px',
                animation:
                  'lds-heart 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) infinite',
              }}
            />
            Photography
          </NameLink>

          {isMobile ? (
            !isOpenMobMenu ? (
              <MobMenuBtn handlerClick={openModal} open />
            ) : (
              <MobileMenu>
                <MobileMenuBtnWrapper>
                  <MobMenuBtn handlerClick={closeModal} />
                </MobileMenuBtnWrapper>

                <NavigationMenu />
              </MobileMenu>
            )
          ) : (
            <NavigationMenu />
          )}
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};

// export default Header;

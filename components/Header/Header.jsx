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
import {
  Container,
  NavigationMenu,
  OpenMobMenuBtn,
  CloseMobMenuBtn,
} from '@/components';

const breakpoint = 768;

export const Header = () => {
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useMediaQuery();
  const router = useRouter();

  useEffect(() => {
    if (+width < breakpoint) {
      return setIsMobile(true);
    }

    setIsMobile(false);
  }, [width]);

  useEffect(() => {
    closeModal();
  }, [router.pathname]);

  const openModal = () => {
    setIsOpenMobMenu(true);
  };
  const closeModal = () => {
    setIsOpenMobMenu(false);
  };

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
              <OpenMobMenuBtn handlerClick={openModal} />
            ) : (
              <MobileMenu>
                <MobileMenuBtnWrapper>
                  <CloseMobMenuBtn handlerClick={closeModal} />
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

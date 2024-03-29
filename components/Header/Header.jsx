import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  HeaderStyled,
  Wrapper,
  NameLink,
  Name,
  MobileMenu,
  MobileMenuBtnWrapper,
  WrapperAfter,
} from './Header.styled';
import {
  Container,
  NavigationMenu,
  OpenMobMenuBtn,
  CloseMobMenuBtn,
} from '@/components';

const BREAKPOINT = 768;

export const Header = () => {
  // State variables
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Custom hooks
  const { width } = useMediaQuery();

  // Router
  const router = useRouter();

  // Event handlers
  const openModal = useCallback(() => {
    setIsOpenMobMenu(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenMobMenu(false);
  }, []);

  // Effects
  useEffect(() => {
    if (width < BREAKPOINT) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  useEffect(() => {
    closeModal();
  }, [router.asPath]);

  // Render

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <NameLink href="/" rel="noreferrer noopener">
            <Name> Marina Khivrych</Name>
            {/* <Image
              src="/images/support-ukraine.png"
              alt="Support Ukraine"
              width={32}
              height={28}
              style={{
                marginRight: '12px',
                animation:
                  'lds-heart 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) infinite',
              }}
            /> */}
            Photography
          </NameLink>

          {isMobile ? (
            !isOpenMobMenu ? (
              <OpenMobMenuBtn handlerClick={openModal} />
            ) : (
              <MobileMenu>
                <WrapperAfter>
                  <MobileMenuBtnWrapper>
                    <CloseMobMenuBtn handlerClick={closeModal} />
                  </MobileMenuBtnWrapper>

                  <NavigationMenu />
                </WrapperAfter>
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

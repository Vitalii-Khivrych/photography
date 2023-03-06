import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${P => P.top || '20px'};
  padding-bottom: ${P => P.bottom || '20px'};
`;

export const HeroSection = styled(Section)`
  width: 100%;

  background-image: url('/images/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: 480px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    width: 1280px;
  }
`;

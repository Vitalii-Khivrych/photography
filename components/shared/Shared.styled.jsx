import Link from 'next/link';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${p => p.top || '0px'};
  padding-bottom: ${p => p.bottom || '20px'};
`;

export const WrapperAbsoluteElement = styled.div`
  /* position: relative; */
`;

export const GoBackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 20px;

  width: 120px;
  height: 40px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;

  background-color: #e4dfda;
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover {
    box-shadow: 0 6px 12px #141414;
  }
`;

export const HeroSection = styled(Section)`
  width: 100%;

  background-image: url('/images/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  /* width: 100%; */
  padding: 0 20px;
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

export const HiddenTitle = styled.h2`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

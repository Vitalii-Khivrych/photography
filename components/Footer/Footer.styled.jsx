import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${p => p.theme.colors.footerBackground};
  padding: 20px 0;
`;

export const PhotographerName = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-weight: 700;
  font-size: 34px;

  color: ${p => p.theme.colors.footerText};

  margin: 0 auto;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 38px;
    margin: 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
    font-size: 42px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

// @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
//   flex-direction: row;
//   justify-content: center;
// }

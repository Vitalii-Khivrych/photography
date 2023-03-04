import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${p => p.theme.colors.footerBackground};
  padding: 20px 0;
`;

export const PhotographerName = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-weight: 700;
  font-size: 42px;

  color: ${p => p.theme.colors.footerText};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

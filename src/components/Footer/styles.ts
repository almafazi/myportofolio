import { WithTheme } from 'models/interfaces';
import styled from 'styled-components';

type FooterTitleProps = WithTheme;
type SocialMediaContainerProps = WithTheme;

export const FooterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PoweredBy = styled.span`
  color: white;
  margin: 30px 0;
`;

export const FooterTitle = styled.h2<FooterTitleProps>`
  font-weight: 600;
  width: 80%;
  font-size: ${({ theme }: FooterTitleProps) => theme.fontSizes.large};
  color: ${({ theme }: FooterTitleProps) => theme.colors.white};
  text-align: center;
`;

export const SocialMediaContainer = styled.div<SocialMediaContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 16px 8px;
  column-gap: 32px;
  row-gap: 16px;

  > * {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }: SocialMediaContainerProps) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

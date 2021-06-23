import styled from 'styled-components';

import { WithTheme } from 'models/interfaces';

type HeroContainerProps = WithTheme;
type HeroTextProps = WithTheme;
type HeroTextContainerProps = WithTheme;
type HeroTextOrangeProps = WithTheme;
type HeroDrawProps = WithTheme;

export const HeaderContainer = styled.header<HeroContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;

  &::before {
    content: '';
    background: url('/img/dot.svg');
    background-repeat: repeat;
    display: block;
    margin-top: 10px;
    width: 40vw;
    max-width: 400px;
    height: 70px;
    position: absolute;
    left: 0;
    bottom: -65px;

    @media (min-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.sm}) {
      width: 150px;
      bottom: 24px;
    }

    @media (min-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.lg}) {
      width: 100%;
      bottom: -20px;
    }

    @media (max-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.sl}) {
      bottom: -40px;
    }

    @media (max-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.xl}) {
      bottom: -60px;
    }

    @media (max-width: ${({ theme }: HeroDrawProps) => theme.breakpoints.xs}) {
      bottom: -85px;
      width: 100%;
    }
  }

  @media (min-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const HeroTextContainer = styled.div<HeroTextContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media (min-width: ${({ theme }: HeroTextContainerProps) => theme.breakpoints.sm}) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const HeroTitle = styled.h1<HeroTextProps>`
  font-weight: 600;
  font-size: ${({ theme }: HeroTextProps) => theme.fontSizes.extraLarge};
  color: ${({ theme }: HeroTextProps) => theme.colors.white};
`;

export const HeroText = styled.h1<HeroTextProps>`
  font-weight: 600;
  font-size: ${({ theme }: HeroTextProps) => theme.fontSizes.extraLarge};
  color: ${({ theme }: HeroTextProps) => theme.colors.white};

  @media (max-width: ${({ theme }: HeroDrawProps) => theme.breakpoints.xs}) {
    font-size: ${({ theme }: HeroTextProps) => theme.fontSizes.semiExtraLarge};
  }
`;

export const HeroTextOrange = styled.span<HeroTextOrangeProps>`
  font-weight: 600;
  font-size: ${({ theme }: HeroTextOrangeProps) => theme.fontSizes.extraLarge};
  color: ${({ theme }: HeroTextOrangeProps) => theme.colors.secondary.main};
`;

export const HeroDescription = styled.h1<HeroTextProps>`
  font-weight: 600;
  font-size: ${({ theme }: HeroTextProps) => theme.fontSizes.extraLarge};
  color: ${({ theme }: HeroTextProps) => theme.colors.white};
  display: none;

  @media (max-width: ${({ theme }: HeroDrawProps) => theme.breakpoints.xs}) {
    display: block;
  }
`;

export const HeroDraw = styled.img<HeroDrawProps>`
  margin-top: 30px;

  content: url('/img/headerImage.svg');
  display: none;

  @media (min-width: ${({ theme }: HeroDrawProps) => theme.breakpoints.sm}) {
    display: block;
  }

  @media (max-width: ${({ theme }: HeroDrawProps) => theme.breakpoints.lx}) {
    display: none;
  }
`;

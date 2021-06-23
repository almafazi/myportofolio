import { Theme } from 'models/interfaces';
import { colors } from './colors';

export const theme: Theme = {
  logo: {
    dark: '/img/almafazi.png',
    light: '/img/almafazi.png',
  },

  colors: {
    primary: {
      main: colors.primary.main,
      dark: colors.primary.dark,
      darker: colors.primary.darker,
    },

    secondary: { main: colors.secondary.main, dark: colors.secondary.dark },
    typography: {
      main: colors.typography.main,
      dark: colors.typography.dark,
      darker: colors.typography.darker,
    },

    background: colors.background,
    white: colors.white,
  },

  breakpoints: {
    xs: '480px',
    sm: '600px',
    md: '801px',
    lg: '1025px',
    lx: '1180px',
    xl: '1281px',
    sl: '1441px',
  },

  fontSizes: {
    extraSmall: '0.8rem',
    small: '1rem',
    default: '1.5rem',
    large: '2rem',
    semiExtraLarge: '2.5rem',
    extraLarge: '3rem',
  },
} as const;

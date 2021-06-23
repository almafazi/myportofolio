interface LogoColor {
  dark: string;
  light: string;
}

interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  lx: string;
  xl: string;
  sl: string;
}

interface FontSizes {
  extraSmall: string;
  small: string;
  default: string;
  large: string;
  extraLarge: string;
  semiExtraLarge: string;
}

export interface Colors {
  primary: ColorShade;
  secondary: ColorShade;
  typography: ColorShade;
  background: string;
  white: string;
}

export interface Theme {
  logo: LogoColor;
  colors: Colors;
  breakpoints: Breakpoints;
  fontSizes: FontSizes;
}

export interface WithTheme {
  theme: Theme;
}

interface ColorShade {
  main: string;
  dark: string;
  darker?: string;
}

export interface Technologies {
  title: string;
  years?: number;
  months?: number;
  iconUrl: string;
}

export interface Tech {
  title: string;
}

export interface Experience {
  company: string;
  startDate: string;
  endDate?: string;
  jobTitle: string;
  description?: string;
  techs?: Tech[];
}

export interface ShowcaseItem {
  title: string;
  description: string;
  url: string;
}

export interface SocialMediaItem {
  icon: string;
  url: string;
}

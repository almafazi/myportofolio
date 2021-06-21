import { createGlobalStyle } from 'styled-components';

import { theme } from 'shared/theme';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
  }

  html,
  body,
  div#__next {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    background-color: ${theme.colors.background};
  }

  html {
    font-size: 12px;
    scroll-behavior: smooth;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    html {
      font-size: 13px;
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    html {
      font-size: 16px;
    }
  }
`;

export default GlobalStyles;

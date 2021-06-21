import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from 'shared/theme';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Almafazi - Software Developer</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <link rel='manifest' href='/manifest.json' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800&display=swap' rel='stylesheet' />
        <meta
          name='description'
          content="Almafazi's Portofolio, a Programmer,  Software Developer, Developer, Software Engineer"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { ContextAPIProvider } from '../contexts/ContextAPI';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --dark: #000;
    --secondary-dark: #1d1d1d;
    --secondary: #682ae9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--dark);

  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
  
  b,
  strong,
  a,
  p,
  span,
  body,
  button {
    margin: 0;
    padding: 0;
    font: 400 1rem 'Roboto Mono', monospace;
  }

  /* scroll */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #111;
  }

  ::-webkit-scrollbar-thumb {
    background: #5f5f5f;
    border-radius: 3px;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ContextAPIProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ContextAPIProvider>
    </>
  );
}

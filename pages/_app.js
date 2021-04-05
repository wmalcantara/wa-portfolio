import { createGlobalStyle, ThemeProvider } from 'styled-components';

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

  a,
  p,
  span,
  body,
  button {
    font: 400 1rem 'Roboto Mono', monospace;
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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

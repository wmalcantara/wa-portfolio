import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --dark: #000;
    --primary: #1d1d1d;
    --secondary: #682ae9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 62.5% because, 1rem is equal to 10px, so 1.6rem is 16px.
    scroll-behavior: smooth;
  }
  
  body {
    font: 400 16px 'Roboto Mono', monospace;
    background: #000;
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
    font: 400 16px 'Roboto Mono', monospace;
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
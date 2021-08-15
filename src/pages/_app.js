import { ContextAPIProvider } from '../contexts/ContextAPI';

import { GlobalStyle } from '../styles/global.js';

import Header from '../components/Header';
// import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ContextAPIProvider>
        <Header />
        <Component {...pageProps} />

      </ContextAPIProvider>
    </>
  );
}

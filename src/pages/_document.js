import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <title>Walter Alcantara</title>
          <link rel="icon" type="image/png" href="/assets/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Walter Alcantara | Portfólio" />
          <meta property="og:description" content="Olá, me chamo Walter Alcantara. confira meu site pessoal." />
          <meta property="og:url" content="https://walteralcantara.vercel.app" />
          <meta property="og:image" content="https://walteralcantara.vercel.app/og-image.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

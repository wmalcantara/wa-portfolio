import Head from 'next/head';

export default function HeadComponent({ title }) {
  return (
    <Head>
        <title>{ title }</title>
        <link rel="icon" type="image/png" href="/assets/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Walter Alcantara | Portfólio" />
        <meta property="og:description" content="Olá, me chamo Walter Alcantara. confira meu site pessoal." />
        <meta property="og:url" content="https://walteralcantara.vercel.app" />
        <meta property="og:image" content="https://walteralcantara.vercel.app/og-image.png" />
    </Head>
    
  );
}

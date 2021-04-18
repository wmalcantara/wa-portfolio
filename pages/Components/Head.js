import Head from 'next/head';

export default function HeadComponent({ title }) {
  return (
    <Head>
        <title>{ title }</title>
        <link rel="icon" type="image/png" href="/assets/favicon.ico" />
    </Head>
    
  );
}

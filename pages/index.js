import Head from 'next/head';
import Home from './home';
import MenuBar from './Nav/MenuBar';

export default function Index() {
  return (
    <>
      <MenuBar />
      <Home />
    </>
  );
}

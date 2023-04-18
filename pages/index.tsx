import Head from 'next/head';
import Banner from './banner';
import Menu from './menu';
import Conteudo from './conteudo';
import Footer from './footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Blog</title>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Banner></Banner>
      <Menu></Menu>
      <Conteudo></Conteudo>
      <Footer></Footer>
    </>
  );
}

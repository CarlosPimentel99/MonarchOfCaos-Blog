import Head from 'next/head';
import Banner from '../components/banner';
import Menu from '../components/menu';
import Conteudo, { INoticias } from '../components/conteudo';
import Footer from '../components/footer';
import { GetServerSideProps } from 'next';
import { prisma } from '../lib/prisma';
import { t001 } from '@prisma/client';

export default function Home({ noticias }: INoticias) {
  return (
    <>
      <Head>
        <title>Meu Blog</title>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Banner></Banner>
      <Menu></Menu>
      <Conteudo noticias={noticias}></Conteudo>
      <Footer></Footer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<INoticias> = async () => {
  const noticias = await prisma.t001.findMany()

  const noticiasSerializada = JSON.parse(JSON.stringify(noticias))

  return {
    props: {
      noticias: noticiasSerializada
    }
  }
}
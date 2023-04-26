import { HrefButtom } from '../custom/hrefButtom';
import { TituloConteudoCard } from '../custom/tituloConteudoCard'
import Head from 'next/head';
import { styles } from './style.js';
import { t001 } from '@prisma/client';

export interface INoticias {
    noticias: t001[]
}

export default function Conteudo({ noticias }: INoticias) {
    return (
        <div>
            <Head>
                <style>{styles}</style>
            </Head>
            <div className="container">
                {noticias.map(noticia => (
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card">
                                <img className="card-img-top" src={noticia.f001imagem || "https://via.placeholder.com/150"} alt="Imagem da Notícia" />
                                <div className="card-body">
                                    <p className="card-text"></p>
                                    <TituloConteudoCard
                                        titulo={noticia.f001titulo}
                                        conteudo={noticia.f001resumo}
                                    />
                                    <HrefButtom
                                        text="Exibir Mais"
                                        href={`/noticiaCompleta/${noticia.f001idNoticia}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="https://via.placeholder.com/150" alt="Anúncio" />
                                <div className="card-body">
                                    <h5 className="card-title">Anúncio do Google</h5>
                                    <p className="card-text">Descrição do anúncio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
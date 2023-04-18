import { HrefButtom } from '../components/custom/hrefButtom';
import { TituloConteudoCard } from '../components/custom/tituloConteudoCard'

import { styles } from './style.js';
import Head from 'next/head';

export default function Conteudo() {
    return (
        <div>
            <Head>
                <style>{styles}</style>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <img className="card-img-top" src="https://via.placeholder.com/150" alt="Imagem da Notícia" />
                            <div className="card-body">
                                <p className="card-text"></p>
                                <TituloConteudoCard
                                    titulo="Título da Notícia"
                                    conteudo="Texto da notícia resumido"
                                />
                                <HrefButtom
                                    text="Exibir Mais"
                                    href="#"
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
            </div>

        </div>
    );
}
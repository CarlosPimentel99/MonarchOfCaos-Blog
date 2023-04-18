import { styles } from './style.js';
import Head from 'next/head';

interface ITituloConteudoCard {
    titulo: string
    conteudo: string
}

export function TituloConteudoCard(props: ITituloConteudoCard) {
    return (
        <>
            <Head>
                <style>{styles}</style>
            </Head>

            <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">{props.conteudo}</p>
        </>
    );
}
import { styles } from './style.js';
import Head from 'next/head';


export default function Footer() {
    return (
        <>
            <Head>
                    <style>{styles}</style>
            </Head>
            <footer>
                <p>Todos os direitos reservados Pimentel Software</p>
            </footer>
        </>
    );
}
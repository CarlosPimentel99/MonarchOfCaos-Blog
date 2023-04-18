import { menu } from './style.js';
import Head from 'next/head';

export default function Menu() {
    return (
        <div>
            <Head>
                <style>{menu}</style>
            </Head>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">Contato</a>
            </div>
        </div>
    );
}
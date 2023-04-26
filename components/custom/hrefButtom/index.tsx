import { styles } from './style.js';
import Head from 'next/head';

interface IHrefButtom {
    href: string
    text: string
};

export function HrefButtom(props: IHrefButtom) {
    return (
        <>
            <Head>
                <style>{styles}</style>
            </Head>
            <a href={props.href} className="btn btn-primary">{props.text}</a>
        </>
    );

};
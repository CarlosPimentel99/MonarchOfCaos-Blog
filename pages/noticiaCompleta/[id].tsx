import { t001 } from "@prisma/client"
import { prisma } from "../../lib/prisma"
import { GetServerSideProps } from "next"
import { json } from "stream/consumers"

export default function NoticiaCompleta(noticia: t001) {
    return (
        <>
            <p>Teste</p>
            <p>{noticia.f001titulo}</p>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<t001> = async ({ query }) => {
    const noticia = await prisma.t001.findUnique({
        where: {
            f001idNoticia: Number(query.id)
        }
    })

    const noticiaSerializada = JSON.parse(JSON.stringify(noticia))

    return {
        props: {
            ...noticiaSerializada!
        }
    }
}

// export const getServerSideProps: GetServerSideProps<noticia> = async ({ query }) => {
//     const noticia = await prisma.t001.findUnique({
//         select: {
//             f001idNoticia: true,
//             f001titulo: true,
//             f001resumo: true,
//             f001conteudo: true,
//             f001imagem: true
//         },
//         where: {
//             f001idNoticia: Number(query.id)
//         }
//     })

//     return {
//         props: {
//             ...noticia!
//         }
//     }
// }
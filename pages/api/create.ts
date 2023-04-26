import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { IFormulario } from "../cadastroNoticia";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { f001titulo, f001resumo, f001conteudo, f001imagem } = req.body as IFormulario

    try {
        await prisma.t001.create({
            data: {
                f001titulo,
                f001resumo,
                f001conteudo,
                f001imagem
            }
        })
        res.status(200).json({ message: 'Notícia Criada!' })
    } catch (error) {
        console.log(error);

    }

}
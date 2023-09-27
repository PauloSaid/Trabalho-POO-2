import { PrismaClient } from "@prisma/client";
import Avaliacao from "../models/Avaliacao";
import Grupo from "../models/Grupo";

const prisma = new PrismaClient();

export async function populaAvalicao(avaliacao: Avaliacao, grupo: Grupo) {
    const avaliacaoData = await prisma.avaliacao.create({
        data: {
            idGrupo: grupo.getNomeGrupo(),
            nota1: avaliacao.getNota1(),
            nota2: avaliacao.getNota2(),
            notaFinal: avaliacao.calcularNota(avaliacao.getNota1(), avaliacao.getNota2())
        }
    })
}

export async function readAvaliacao(grupo: Grupo) {
    const avaliacaoData = await prisma.avaliacao.findUnique({
        where: {
            idGrupo: grupo.getNomeGrupo()
        }
    })
}

export async function updateAvaliacao(grupo: Grupo, avaliacao: Avaliacao) {
    const avaliacaoData = await prisma.avaliacao.update({
        where: {
            idGrupo: grupo.getNomeGrupo()
        },
        data : {

        }
    })
}

export async function deleteAvaliacao(grupo: Grupo) {
    const avaliacaoData = await prisma.avaliacao.delete({
        where: {
            idGrupo: grupo.getNomeGrupo()
        }
    })
}
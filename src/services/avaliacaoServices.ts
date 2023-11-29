import { PrismaClient } from "@prisma/client";
import Avaliacao from "../models/Avaliacao";
import Grupo from "../models/Grupo";

const prisma = new PrismaClient();

class AvalicacaoService{
    constructor(){}
     async populaAvalicao(avaliacao: Avaliacao, grupo: Grupo) {
        const avaliacaoData = await prisma.avaliacao.create({
            data: {
                idGrupo: grupo.getNomeGrupo(),
                nota1: avaliacao.getNota1(),
                nota2: avaliacao.getNota2(),
                notaFinal: avaliacao.calcularNota(avaliacao.getNota1(), avaliacao.getNota2())
            }
        })
    }
    
    async readAvaliacao(grupo: Grupo) {
        const avaliacaoData = await prisma.avaliacao.findUnique({
            where: {
                idGrupo: grupo.getNomeGrupo()
            }
        })
    }
    
     async updateAvaliacao(grupo: Grupo, avaliacao: Avaliacao) {
        const avaliacaoData = await prisma.avaliacao.update({
            where: {
                idGrupo: grupo.getNomeGrupo()
            },
            data : {
    
            }
        })
    }
    
    async deleteAvaliacao(grupo: Grupo) {
        const avaliacaoData = await prisma.avaliacao.delete({
            where: {
                idGrupo: grupo.getNomeGrupo()
            }
        })
    }
}

export default new AvalicacaoService();

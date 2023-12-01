import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AvalicacaoService{
    constructor(){}
     async createAvalicao(avaliacao: Prisma.AvaliacaoCreateInput) {
        
        try{
            const newAvalicao = await prisma.avaliacao.create({
                data: avaliacao
            })
            return
       }catch(error){
            console.log(error);
            return null;
       }
        /*const avaliacaoData = await prisma.avaliacao.create({
            data: {
                idGrupo: grupo.getNomeGrupo(),
                nota1: avaliacao.getNota1(),
                nota2: avaliacao.getNota2(),
                notaFinal: avaliacao.calcularNota(avaliacao.getNota1(), avaliacao.getNota2())
            }
        })*/
    }
    
    async findAvaliacao(idGrupo?: string) {
       try{
            if(idGrupo){
                const avaliacao = await prisma.avaliacao.findUnique({
                    where: {
                        idGrupo
                    }
                })
                return avaliacao;
            }else{
                const avaliacoes = await prisma.avaliacao.findMany();
                return avaliacoes;
            }
       }catch(error){
            console.log(error);
            return null;
       }
    }
    
     async updateAvaliacao(idGrupo: string, avaliacao: Prisma.AvaliacaoUpdateInput) {
        try{
            const avaliacaoToUpdate = await prisma.avaliacao.update({
                where: {
                    idGrupo
                },
                data: {
                    nota1: avaliacao.nota1,
                    nota2: avaliacao.nota2,
                    notaFinal: avaliacao.notaFinal
                }
            });
            return avaliacaoToUpdate;
       }catch(error){
            console.log(error);
            return null;
       }
    }
    
    async deleteAvaliacao(idGrupo: string) {
        try{
            if (!idGrupo){
                return console.log("ID is not optional.");
            }
            await prisma.avaliacao.delete({
                where: {
                    idGrupo
                }
            });
            return "Deleted";
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new AvalicacaoService();

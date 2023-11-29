import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class GrupoService {
    constructor () {}

    async createGrupo(grupo: Prisma.GrupoCreateInput) {
        try {
            const newGrupo = await prisma.grupo.create({
                data: grupo
            });
            return newGrupo;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async findGrupo(nomeGrupo?: string){
        try {
            if(nomeGrupo){
                const grupo = await prisma.grupo.findUnique({
                    where: { nomeGrupo }
                });
                return grupo;
            } else {
                const grupos = await prisma.grupo.findMany();
                return grupos;
            }
        }   catch(error){
            console.log(error);
            return undefined;
        }
    }

    async updateGrupo(nomeGrupo: string, newData: Prisma.GrupoUpdateInput){
        try {
            const grupoUpdated = await prisma.grupo.update({
                where: {
                    nomeGrupo
                },
                data: {
                    alunos: newData.alunos,
                    avaliacao: newData.avaliacao,
                    diaApresentacao: newData.diaApresentacao,
                    lider: newData.lider,
                    nomeGrupo: newData.nomeGrupo,
                    nomeProjeto: newData.nomeProjeto,
                    numeroEstande: newData.numeroEstande
                }
            });
            return grupoUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteGrupo(nomeGrupo: string){
        try {
            if(!nomeGrupo){
                return console.log("NomeGrupo is not optional");
            }
            await prisma.grupo.delete({where: {nomeGrupo}});
            return "Deleted";
        }   catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new GrupoService();
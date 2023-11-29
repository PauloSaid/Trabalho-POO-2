import { PrismaClient } from "@prisma/client";
import Grupo from "../models/Grupo";
import Aluno from "../models/Aluno";


const prisma = new PrismaClient();

class GrupoService{
    constructor(){}

     async populaGrupo(grupo: Grupo) {
        
        const grupoData = await prisma.grupo.create({
            data: {
                estandeId: grupo.getNumeroEstande(),
                nomeGrupo: grupo.getNomeGrupo(),
                nomeProjeto: grupo.getNomeProjeto(),
                diaApresentacao: grupo.getDiaApresentacao(),
                alunoId: grupo.getLider(),
            }
        })
    
        await prisma.aluno.update({
            where: {
                email: grupo.getLider(),
            },
            data: {
                grupoId: grupo.getNomeGrupo(),
            }
        })
    }
    
     async readGrupo(grupo: Grupo) {
        return await prisma.grupo.findUnique({
            where: {
                nomeGrupo: grupo.getNomeGrupo()
            }
        })
    }
    
     async updateGrupo(grupo: Grupo, aluno: Aluno) {
        const grupoData = await prisma.grupo.update({
            where: {
                nomeGrupo: grupo.getNomeGrupo()
            },
            data: {
                alunoId: aluno.getEmail()
            }
        })
    }
    
    
     async deleteGrupo(grupo: Grupo) {
        const grupoData = await prisma.grupo.delete({
            where: {
                nomeGrupo: grupo.getNomeGrupo()
            }
        })
    }
}

export default new GrupoService();

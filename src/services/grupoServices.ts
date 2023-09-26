import { PrismaClient } from "@prisma/client";
import Grupo from "../models/Grupo";


const prisma = new PrismaClient();

export async function populaGrupo(grupo: Grupo) {
    
    const grupoData = await prisma.grupo.create({
        data: {
            estandeId: grupo.getNumeroEstande(),
            nomeGrupo: grupo.getNomeGrupo(),
            nomeProjeto: grupo.getNomeProjeto(),
            diaApresentacao: grupo.getDiaApresentacao(),
            //alunoId: grupo.getLider()
        }
    })
}

export async function readGrupo(grupo: Grupo) {
    const grupoData = await prisma.grupo.findUnique({
        where: {
            nomeGrupo: grupo.getNomeGrupo()
        }
    })
}

/*export async function updateGrupo(grupo: Grupo) {
    const grupoData = await prisma.grupo.update({
        where: {
            nomeGrupo: grupo.getNomeGrupo()
        },
        data: {
            
        }
    })
}
*/

export async function deleteGrupo(grupo: Grupo) {
    const grupoData = await prisma.grupo.delete({
        where: {
            nomeGrupo: grupo.getNomeGrupo()
        }
    })
}
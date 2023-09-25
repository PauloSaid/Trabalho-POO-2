import { PrismaClient } from "@prisma/client";
import Aluno from "../models/Aluno";

const prisma = new PrismaClient();

export async function populaAluno(aluno: Aluno) {
    
    const alunoData = await prisma.aluno.create({
        data: {  
            email: aluno.getEmail(),
            nome: aluno.getNome(),
            matricula: aluno.getMatricula(),
            telefone: aluno.getTelefone(),
            grupoId: aluno.getGrupo().getNomeGrupo()
        }
    })
}

export async function readAluno(aluno: Aluno) {
    const alunoData = await prisma.aluno.findUnique({
        where: {
            matricula: aluno.getMatricula()
        }
    })
}

export async function deleteAluno(aluno: Aluno) {
    const alunoData = await prisma.aluno.delete({
        where: {
            matricula: aluno.getMatricula(),
        }
    })
}

// fazer: export async function updateAluno
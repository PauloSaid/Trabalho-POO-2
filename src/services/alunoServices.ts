import { PrismaClient } from "@prisma/client";
import Aluno from "../models/Aluno";

const prisma = new PrismaClient();

export default async function populaAluno(aluno: Aluno) {
    
    const alunoData = await prisma.aluno.create({
        data: {  
            email: aluno.getEmail(),
            nome: aluno.getNome(),
            matricula: aluno.getMatricula(),
            telefone: aluno.getTelefone(),
            grupoId: aluno.getGrupo().getNomeGrupo(),
        }
    })
}
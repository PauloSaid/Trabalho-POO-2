import { PrismaClient } from "@prisma/client";
import Aluno from "../models/Aluno";

const prisma = new PrismaClient();

class AlunoService{
    constructor(){}
    async populaAluno(aluno: Aluno) {
       
       const alunoData = await prisma.aluno.create({
           data: {  
               email: aluno.getEmail(),
               nome: aluno.getNome(),
               matricula: aluno.getMatricula(),
               telefone: aluno.getTelefone(),
           }
       })
    }
    
     async readAluno(aluno: Aluno) {
       const alunoData = await prisma.aluno.findUnique({
           where: {
               matricula: aluno.getMatricula()
           }
       })
    }
    
    async deleteAluno(aluno: Aluno) {
       const alunoData = await prisma.aluno.delete({
           where: {
               matricula: aluno.getMatricula(),
           }
       })
    }
    
    
    async updateAluno(aluno: Aluno, nomeGrupo: string) {
       const alunoData = await prisma.aluno.update({
           where : {
               matricula: aluno.getMatricula()
           }, 
           data: {
               grupoId: nomeGrupo
    
           }
       })
    }
}

export default new AlunoService();


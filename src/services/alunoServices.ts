import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class AlunoService {
    constructor (){}

    async createAluno(aluno: Prisma.AlunoCreateInput) {
        try {
            const newAluno = await prisma.aluno.create({
                data: aluno
            });
            return aluno;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async findAluno(email: string){
        try {
            if (email){
                const aluno = await prisma.aluno.findUnique({
                    where: {email}
                });
                return aluno;
            }   else{
                const alunos = await prisma.aluno.findMany();
                return alunos;
            }
        }  catch(error){
            console.log(error);
            return undefined;
        }
    }

    async updateAluno(email: string, newData: Prisma.AlunoUpdateInput){
        try {
            const alunoUpdated = await prisma.aluno.update({
                where: {
                    email
                },
                data: {
                    matricula: newData.matricula,
                    email: newData.email,
                    nome: newData.nome,
                    grupo: newData.grupo,
                    grupoAluno: newData.grupoAluno,
                    telefone: newData.telefone,
                    updated_at: newData.updated_at
                }
            });
            return alunoUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteAluno(email: string){
        try{
            if(!email){
                return console.log("ID is not optional.");
            }
            await prisma.aluno.delete({where: {email}});
            return "Deleted";
        }   catch(error){
            console.log(error);
            return null;
        }
    }

}

    export default new AlunoService();
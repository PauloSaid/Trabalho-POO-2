import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProfessorService{
    constructor(){}
     async CreateProfessor(professor: Prisma.ProfessorCreateInput) {
        try{
            const newProfessor = await prisma.professor.create({
                data : professor
            });
            return newProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    
     async findProfessor(email?: string) {
        try{
            if(email){
                const professor = await prisma.professor.findUnique({
                    where: {
                        email
                    }
                })
                return professor;
            }else{
                const professores = await prisma.professor.findMany();
                return professores;
            }

        }catch(error){
            console.log(error);
            return null;
        }
    }
    
     async updateProfessor(email: string, newData: Prisma.ProfessorUpdateInput){
       try{
            const professorToUpdate = await prisma.professor.update({
                where: {
                    email
                }, 
                data: {
                    nome: newData.nome,
                    email: newData.email,
                    updated_at: newData.updated_at
                }
            });
            return professorToUpdate;
       }catch(error){
            console.log(error);
            return null;
       }
    }
    
     async deleteProfessor(email: string) {
        try{
            if (!email){
                return console.log("ID is not optional.");
            }
            await prisma.professor.delete({
                where: {
                    email
                }
            });
            return "deleted";
        }catch(error){
            console.log(error);
            return null;
        }
       
    }
}

export default new ProfessorService();

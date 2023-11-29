import { PrismaClient } from "@prisma/client";
import Professor from "../models/Professor";

const prisma = new PrismaClient();

class ProfessorService{
    constructor(){}
     async populaProfessor(professor: Professor) {
    
        const professorData = await prisma.professor.create({
            data : {
                email: professor.getEmail(),
                nome: professor.getNome(),
            }
        })
    }
    
     async readProfessor(professor: Professor) {
        const professorData = await prisma.professor.findUnique({
            where : {
                email : professor.getEmail()
            }
        })
    }
    
     async updateProfessor(professor: Professor) {
        const professorData = await prisma.professor.update({
            where : {
                email: professor.getEmail()
            },
            data: {
                
            }
        })
    }
    
     async deleteProfessor(professor: Professor) {
        const professorData = await prisma.professor.delete({
            where: {
                email: professor.getEmail()
            }
        })
    }
}

export default new ProfessorService();

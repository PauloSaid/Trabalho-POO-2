import { PrismaClient } from "@prisma/client";
import Professor from "../models/Professor";

const prisma = new PrismaClient();

export async function populaProfessor(professor: Professor) {

    const professorData = await prisma.professor.create({
        data : {
            email: professor.getEmail(),
            nome: professor.getNome(),
        }
    })
}

export async function readProfessor(professor: Professor) {
    const professorData = await prisma.professor.findUnique({
        where : {
            email : professor.getEmail()
        }
    })
}

export async function updateProfessor(professor: Professor) {
    const professorData = await prisma.professor.update({
        where : {
            email: professor.getEmail()
        },
        data: {
            
        }
    })
}

export async function deleteProfessor(professor: Professor) {
    const professorData = await prisma.professor.delete({
        where: {
            email: professor.getEmail()
        }
    })
}
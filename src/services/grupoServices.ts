import { PrismaClient } from "@prisma/client";
import Grupo from "../models/Grupo";
import Avaliacao from "../models/Avaliacao";

const prisma = new PrismaClient();

export default async function populagrupo(grupo: Grupo) {
    
    const grupoData = await prisma.grupo.create({
        data: {
            avaliacao: 
        }
    })
}
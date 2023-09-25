import { PrismaClient } from "@prisma/client";
import Estande from "../models/Estande";

const prisma = new PrismaClient();

export async function populaEstande(estande: Estande) {
    
    const estandeData = await prisma.estande.create({
        data: {  
            numero: estande.getNumero()
        }
    })

}

export async function readEstande(estande: Estande) {
    const estandeData = await prisma.estande.findUnique({
        where: {
            numero: estande.getNumero()
        }
    })
}

export async function updateEstande(estande: Estande, numeroNovo: number) {
    const estandeData = await prisma.estande.update({
        where: {
            numero: estande.getNumero()
        },
        data: {
            numero: numeroNovo
        }
    })
}

export async function deleteEstande(estande: Estande) {
    const estandeData = await prisma.estande.delete({
        where: {
            numero: estande.getNumero()
        }
    })
}
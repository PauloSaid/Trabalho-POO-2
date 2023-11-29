import { PrismaClient } from "@prisma/client";
import Estande from "../models/Estande";

const prisma = new PrismaClient();

class estandeService{
    constructor(){}
    async  populaEstande(estande: Estande) {
        
        const estandeData = await prisma.estande.create({
            data: {  
                numero: estande.getNumero()
            }
        })
    
    }
    
    async readEstande(estande: Estande) {
        const estandeData = await prisma.estande.findUnique({
            where: {
                numero: estande.getNumero()
            }
        })
    }
    
    async updateEstande(estande: Estande, numeroNovo: number) {
        const estandeData = await prisma.estande.update({
            where: {
                numero: estande.getNumero()
            },
            data: {
                numero: numeroNovo
            }
        })
    }
    
     async deleteEstande(estande: Estande) {
        const estandeData = await prisma.estande.delete({
            where: {
                numero: estande.getNumero()
            }
        })
    }
}

export default new estandeService();

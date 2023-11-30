import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class estandeService{
    constructor(){}
    async createEstande(estande: Prisma.EstandeCreateInput) {
        try{
            const newEstande = await prisma.estande.create({
                data: estande
            });
            return newEstande;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    
    async findEstande(numero?: string) {
        try{
            if(numero){
                const estande = await prisma.estande.findUnique({
                    where: {
                        numero
                    }
                })
                return estande;
            }else{
                const estandes = await prisma.estande.findMany();
                return estandes;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }
    
    async updateEstande(numero: string, newData: Prisma.EstandeUpdateInput) {
        try{    
            const estandeToUpdate = await prisma.estande.update({
                where: {
                    numero
                }, 
                data: {
                    numero: newData.numero
                }
            });
            return estandeToUpdate;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    
     async deleteEstande(numero: string) {
        try{
            if(!numero){
                return console.log("number is not optional.");
            }
            await prisma.estande.delete({
                where: {
                    numero: numero
                }
            });
            return "Deleted";
        }catch(error){
            console.log(error);
            return null;
        }  
    }
}

export default new estandeService();

import { Request, Response } from "express";
import estandeServices from "../services/estandeServices";
import { Prisma } from "@prisma/client";

class EstandeController{
    constructor(){}

    async listEstande(req: Request, res: Response){
        try {
            const estandes = await estandeServices.findEstande()

            return res.json(estandes);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
        }

        async createEstande(req: Request, res: Response){
            try {
                const data: Prisma.EstandeCreateInput = req.body;

                const newEstande = await estandeServices.createEstande(data);

                return res.json(newEstande);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }

        async deleteEstande(req: Request, res: Response){
            try {
                const estandeData: number = parseInt(req.params.numero);
                const estande = await estandeServices.deleteEstande(estandeData);

                return res.json(estande);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }

        async updateEstande(req: Request, res: Response){
            try {
                const estandeId = parseInt(req.params.alunoId);
                const data: Prisma.EstandeUpdateInput = req.body;

                const estande = await estandeServices.updateEstande(estandeId,data);

                return res.json(estande);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }
}

export default new EstandeController();
import { Request, Response } from "express";
import avaliacaoServices from "../services/avaliacaoServices";
import { Prisma } from "@prisma/client";

class AvaliacaoContoller{
    constructor(){}

    async listAvaliacao(req: Request, res: Response){
        try{
            const avalicaoId: string | undefined = req.params.id;
            const avaliacao = await avaliacaoServices.findAvaliacao(avalicaoId);

            return res.json(avaliacao);

        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async createAvaliacao(req: Request, res: Response){
        try{
            // não sei se funciona, tem q testar dps
            const avaliacaoData: Prisma.AvaliacaoCreateInput = req.body;
            const grupoData: Prisma.GrupoCreateInput = req.body;

            const newAvaliacao = await avaliacaoServices.createAvalicao(avaliacaoData, grupoData);
            
            return res.json(newAvaliacao);
        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deleteAvaliacao(req: Request, res: Response){
        try{
            const avaliacaoData: string = req.params.id;
            const avaliacao = await avaliacaoServices.deleteAvaliacao(avaliacaoData);

            return res.json(avaliacao);

        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async updateAvaliacao(req: Request, res: Response){
        try{
            const avaliacaoId = req.params.id;
            const newData: Prisma.AvaliacaoUpdateInput = req.body;

            const professor = await avaliacaoServices.updateAvaliacao(avaliacaoId, newData);

            return res.json(professor);
        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new AvaliacaoContoller();
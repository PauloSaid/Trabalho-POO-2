import { Request, Response } from "express";
import avaliacaoServices from "../services/avaliacaoServices";
import { Prisma } from "@prisma/client";

class AvaliacaoContoller{
    constructor(){}

    async listAvaliacao(req: Request, res: Response){
        try{
            const avalicaoId: string | undefined = req.params.id;
            const avaliacao = await avaliacaoServices.findAvaliacao(avalicaoId);

           res.render("Avaliacao", {avaliacao: avaliacao})

        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async createAvaliacao(req: Request, res: Response){
        try{
            // não sei se funciona, tem q testar dps
            const avaliacaoData: Prisma.AvaliacaoCreateInput = req.body;
            console.log(avaliacaoData);

            const newAvaliacao = await avaliacaoServices.createAvalicao(avaliacaoData);
            
            return res.json(newAvaliacao);
        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deleteAvaliacao(req: Request, res: Response){
        try{
            const avaliacaoData: string = req.params.id;
            console.log(avaliacaoData);
            const avaliacao = await avaliacaoServices.deleteAvaliacao(avaliacaoData);
            console.log(avaliacao);

            return res.json(avaliacao);

        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async updateAvaliacao(req: Request, res: Response){
        try{
            const avaliacaoId = req.params.id;
            console.log(avaliacaoId);
            const newData: Prisma.AvaliacaoUpdateInput = req.body;
            console.log(newData);

            const professor = await avaliacaoServices.updateAvaliacao(avaliacaoId, newData);

            return res.json(professor);
        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new AvaliacaoContoller();
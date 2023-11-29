import { Request, Response } from "express";
import alunoServices from "../services/alunoServices";
import { Prisma } from "@prisma/client";

class AlunoController{
    constructor(){}

    async listAluno(req: Request, res: Response){
        try {
            const alunoId: string | undefined = req.params.id;
            const alunos = await alunoServices.findAluno(alunoId);

            return res.json(alunos);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
        }

        async createAluno(req: Request, res: Response){
            try {
                const data: Prisma.AlunoCreateInput = req.body;

                const newAluno = await alunoServices.createAluno(data);

                return res.json(newAluno);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }

        async deleteAluno(req: Request, res: Response){
            try {
                const alunoData: string = req.params.alunoId;
                const aluno = await alunoServices.deleteAluno(alunoData);

                return res.json(aluno);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }

        async updateAluno(req: Request, res: Response){
            try {
                const alunoId = req.params.alunoId;
                const data: Prisma.AlunoUpdateInput = req.body;

                const aluno = await alunoServices.updateAluno(alunoId,data);

                return res.json(aluno);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }
}

export default new AlunoController();
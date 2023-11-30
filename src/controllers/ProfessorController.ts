import { Request, Response } from "express";
import professorServices from "../services/professorServices";
import { Prisma } from "@prisma/client";

class ProfessorController{
    constructor(){}

    async listProfessor(req: Request, res: Response){
        try{
            const professorId: string | undefined = req.params.id;
            const professores = await professorServices.findProfessor(professorId);

            res.render("Professor", {professores: professores});
        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async createProfessor(req: Request, res: Response){
        try{
            const data: Prisma.ProfessorCreateInput = req.body;

            const newProfessor = await professorServices.CreateProfessor(data);

            return res.json(newProfessor);

        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deleteProfessor(req: Request, res: Response){
        try{
            const profesorData: string = req.params.id;
            const professor = await professorServices.deleteProfessor(profesorData);

            return res.json(professor);
        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async updateProfessor(req: Request, res: Response){
        try{
            const professorId = req.params.id;
            const newData: Prisma.ProfessorUpdateInput = req.body;

            const professor = await professorServices.updateProfessor(professorId, newData);
            
            return res.json(professor);
        }catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new ProfessorController();
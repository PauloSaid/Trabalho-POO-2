import { Request, Response } from "express";
import grupoServices from "../services/grupoServices";
import { Prisma } from "@prisma/client";

class GrupoController{
    constructor(){}

    async listGrupo(req: Request, res: Response){
        try {
            const grupoId: string | undefined = req.params.id;
            const grupos = await grupoServices.findGrupo(grupoId);

           res.render("Grupo", {grupos: grupos});
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
        }

        async createGrupo(req: Request, res: Response){
            try {
                const data: Prisma.GrupoCreateInput = req.body;
                console.log(data);

                const newGrupo = await grupoServices.createGrupo(data);
                console.log(newGrupo);

                return res.json(newGrupo);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }

        async deleteGrupo(req: Request, res: Response){
            try {
                const grupoData: string = req.params.grupoId;
                console.log(grupoData);
                const grupo = await grupoServices.deleteGrupo(grupoData);
                console.log(grupo);

                return res.json(grupo);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }

        async updateGrupo(req: Request, res: Response){
            try {
                const grupoId = req.params.grupoId;
                const data: Prisma.GrupoUpdateInput = req.body;

                const grupo = await grupoServices.updateGrupo(grupoId, data);

                return res.json(grupo);
            }   catch(error){
                console.log(error);
                return res.json(400);
            }
        }
}

export default new GrupoController();
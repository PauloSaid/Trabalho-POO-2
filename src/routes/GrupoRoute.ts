import { Router } from "express";
import GrupoController from "../controllers/GrupoController";

const GrupoRouter = Router();

GrupoRouter.get("/grupo/list/:id?", GrupoController.listGrupo);

GrupoRouter.post("/grupo/create", GrupoController.createGrupo);

GrupoRouter.patch("/grupo/update/:grupoId", GrupoController.updateGrupo);

GrupoRouter.delete("/grupo/delete/:grupoId", GrupoController.deleteGrupo);

export default GrupoRouter;
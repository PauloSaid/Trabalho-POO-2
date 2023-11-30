import { Router } from "express";
import GrupoController from "../controllers/GrupoController";

const GrupoRouter = Router();

GrupoRouter.get("/grupo/list/:id", GrupoController.listGrupo);

GrupoRouter.post("grupo/create", GrupoController.createGrupo);

GrupoRouter.put("grupo/update", GrupoController.updateGrupo);

GrupoRouter.delete("grupo/delete", GrupoController.deleteGrupo);

export default GrupoRouter;
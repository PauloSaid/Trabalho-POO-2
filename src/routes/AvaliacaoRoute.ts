import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get("/avaliacao/list/:id", AvaliacaoController.listAvaliacao);

AvaliacaoRouter.post("/avaliacao/create", AvaliacaoController.createAvaliacao);

AvaliacaoRouter.patch("/avaliacao/update", AvaliacaoController.updateAvaliacao);

AvaliacaoRouter.delete("/avaliacao/delete", AvaliacaoController.deleteAvaliacao);

export default AvaliacaoRouter;
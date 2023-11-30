import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRouter = Router();

AlunoRouter.get("/aluno/list/:id?", AlunoController.listAluno);

AlunoRouter.post("/aluno/create", AlunoController.createAluno);

AlunoRouter.patch("/aluno/update/:alunoId", AlunoController.updateAluno);

AlunoRouter.delete("/aluno/delete/:alunoId", AlunoController.deleteAluno);

export default AlunoRouter;
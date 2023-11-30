import { Router } from "express";
import ProfessorController from "../controllers/ProfessorController";

const ProfessorRouter = Router();

ProfessorRouter.get("/professor/list/:id?", ProfessorController.listProfessor);

ProfessorRouter.post("/professor/create", ProfessorController.createProfessor);

ProfessorRouter.patch("/professor/update/:id", ProfessorController.updateProfessor);

ProfessorRouter.delete("/professor/delete/:id", ProfessorController.deleteProfessor);

export default ProfessorRouter;
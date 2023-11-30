import { Router } from "express";
import EstandeController from "../controllers/EstandeController";

const EstandeRouter = Router();

EstandeRouter.get("/estande/list/:id", EstandeController.listEstande);

EstandeRouter.post("/estande/create", EstandeController.createEstande);

EstandeRouter.put("/estande/update", EstandeController.updateEstande);

EstandeRouter.delete("/estande/delete", EstandeController.deleteEstande);

export default EstandeRouter;
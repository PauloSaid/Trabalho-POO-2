import { Router } from "express";
import EstandeController from "../controllers/EstandeController";

const EstandeRouter = Router();

EstandeRouter.get("/estande/list/:id?", EstandeController.listEstande);

EstandeRouter.post("/estande/create", EstandeController.createEstande);

EstandeRouter.patch("/estande/update/:numero", EstandeController.updateEstande);

EstandeRouter.delete("/estande/delete/:numero", EstandeController.deleteEstande);

export default EstandeRouter;
import { RolesController } from "../http/controllers/roles-controller";
import { Router } from "express";

const rolesRoutes = Router()

rolesRoutes.post("/", new RolesController().create)
rolesRoutes.get("/", new RolesController().findAll)
rolesRoutes.delete("/:id", new RolesController().delete)
rolesRoutes.put("/:id", new RolesController().update)

export default rolesRoutes
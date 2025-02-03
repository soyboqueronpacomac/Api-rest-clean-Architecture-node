import { Router } from "express";
import { TodosController } from "./todos.controller";

export class TodosRoutes {
  public static get routes(): Router {
    const routes = Router();
    const controller = new TodosController();
    routes.get("/", controller.getAll);
    routes.get("/:id", controller.getById);
    routes.post("/", controller.create);
    routes.put("/:id", controller.updated);
    return routes;
  }
}

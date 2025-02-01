import { Router } from "express";
import { TodosController } from "./todos.controller";

export class TodosRoutes {
  public static get routes(): Router {
    const routes = Router();
    const controller = new TodosController();
    routes.get("/", controller.getAll);
    return routes;
  }
}

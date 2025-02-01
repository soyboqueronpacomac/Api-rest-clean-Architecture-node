import { Router } from "express";
import { TodosRoutes } from "../todos/presentation/todos.routes";

export class ApiRoutes {
  public static get routes(): Router {
    const routes = Router();
    routes.use("/todos", TodosRoutes.routes);
    return routes;
  }
}

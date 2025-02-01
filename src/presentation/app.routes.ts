import { Router } from "express";
import { AppController } from "./app.controller";
import { ApiRoutes } from "./api.routes";

export class AppRoutes {
  public static get routes(): Router {
    const routes = Router();
    const controller = new AppController();

    routes.get("/", AppController.home);
    routes.use("/api/v1", ApiRoutes.routes);

    return routes;
  }
}

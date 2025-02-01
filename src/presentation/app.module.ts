import express, { Router } from "express";
interface Options {
  port: number;
  routes: Router;
}
export class AppModule {
  private app = express();
  private port: number;
  private routes: Router;
  constructor({ port, routes }: Options) {
    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(this.routes);
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo por http://localhost:${this.port}`);
    });
  }
}

import express from "express";
interface Options {
  port: number;
}
export class AppModule {
  private app = express();
  private port: number;
  constructor({ port }: Options) {
    this.port = port;
  }

  async start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo por http://localhost:${this.port}`);
    });
  }
}

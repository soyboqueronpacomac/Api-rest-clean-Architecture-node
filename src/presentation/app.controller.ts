import type { Request, Response } from "express";

export class AppController {
  public static home = (_req: Request, res: Response) => {
    res.status(200).json({ message: "Inicio de la appi" });
  };
}

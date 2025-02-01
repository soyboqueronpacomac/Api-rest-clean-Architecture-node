import type { Request, Response } from "express";
interface Todos {
  id: number;
  text: string;
  createdAt: Date | null;
}
const todos: Todos[] = [{ id: 1, text: "Buy milk", createdAt: new Date() }];
export class TodosController {
  constructor() {}

  public getAll = (_req: Request, res: Response) => {
    res.status(200).json({ todos });
  };
}

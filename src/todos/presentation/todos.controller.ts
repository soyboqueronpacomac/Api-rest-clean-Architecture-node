import type { Request, Response } from "express";
interface Todos {
  id: number;
  text: string;
  createdAt: Date | null;
}
const todos: Todos[] = [
  { id: 1, text: "Buy milk", createdAt: new Date() },
  { id: 2, text: "Buy bread", createdAt: null },
  { id: 3, text: "Buy butter", createdAt: new Date() },
];
export class TodosController {
  constructor() {}

  public getAll = (_req: Request, res: Response) => {
    res.status(200).json({ data: todos });
  };
  public getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not a number" });
    const todo = todos.find((todo) => todo.id === id);
    todo
      ? res.status(200).json(todo)
      : res.status(404).json(`Todo with id ${id} not exits`);
  };
  public create = (req: Request, res: Response) => {
    const { text } = req.body;
    if (!text)
      return res.status(400).json({ error: "Text property is required" });
    const newTodo: Todos = {
      id: todos.length + 1,
      text,
      createdAt: null,
    };
    todos.push(newTodo);
    res.status(201).json({ data: newTodo });
  };
  public updated = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id))
      return res.status(400).json({ error: "Id argument is not number" });
    const todo = todos.find((todo) => todo.id === id);
    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not exits` });
    const { text, createdAt } = req.body;

    todo.text = text || todo.text;
    createdAt === "null"
      ? (todo.createdAt = null)
      : (todo.createdAt = new Date(createdAt || todo.createdAt));
    res.status(201).json({ data: todo });
  };
}

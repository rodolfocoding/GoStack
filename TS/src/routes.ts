import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Rodolfo",
    email: "rodolfo.coding@gmail.com",
    senha: "123456",
    techs: ["Node.js", "React", { title: "Node.js", experience: 100 }],
  });

  return response.json({
    message: "Hello World!",
  });
}

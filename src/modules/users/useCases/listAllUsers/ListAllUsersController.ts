import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    return response.json(
      this.listAllUsersUseCase.execute({ user_id: String(user_id) })
    );
  }
}

export { ListAllUsersController };

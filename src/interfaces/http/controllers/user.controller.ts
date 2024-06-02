import { Request, Response } from "express";
import { HttpStatus } from "../../../infra/common/http/HttpCodes";
import { userService } from "../../../app/services";

export class UserController {
  async createUser(req: Request, res: Response) {
    await userService.createUser(req.body);

    return res.status(HttpStatus.OK).json({ message: "Usuário criado!" });
  }

  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers(req.query);

    return res.status(HttpStatus.OK).json({ users });
  }

  async editUser(req: Request, res: Response) {
    await userService.editUser(req.params.id, req.body);

    return res.status(HttpStatus.OK).json({ message: "Usuário editado!" });
  }

  async deleteUser(req: Request, res: Response) {
    await userService.deleteUser(req.params.id);

    return res.status(HttpStatus.OK).json({ message: "Usuário excluido!" });
  }
}

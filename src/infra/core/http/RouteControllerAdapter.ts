import { Request, Response } from "express";
import { HttpException } from "../../common/http/Exception";
import { HttpStatus } from "../../common/http/HttpCodes";

export function RouteControllerAdapter(controller: Object, callback: Function) {
  return async (req: Request, res: Response) => {
    try {
      await callback.apply(controller, [req, res]);
    } catch (err: any) {
      if (err instanceof HttpException) {
        return res.status(err.statusCode).json({ message: err.data });
      }

      return res.status(HttpStatus.SERVER_ERROR).json({ message: err.message });
    }
  };
}

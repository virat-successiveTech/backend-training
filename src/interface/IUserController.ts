import { Request, Response } from 'express';

export interface IUserController {
  getUsers(req: Request, res: Response): void;
  createUser(req: Request, res: Response): void;
}

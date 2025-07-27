import { Request, Response } from 'express';
import { mockList } from '../mockData';

export class UserController {
  getUsers(req: Request, res: Response): void {
    res.status(200).json({ message: 'List of users', data: { mockList } });
  }

  createUser(req: Request, res: Response): void {
    const { name, email } = req.body;
    console.log(name);
    res.status(201).json({ message: 'User created', data: { name, email } });
  }
}

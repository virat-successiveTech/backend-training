import { Request, Response, NextFunction } from 'express';

const middleware2 = (req: Request, res: Response, next: NextFunction): void => {
  console.log('Middleware 2: Processing');

  next();
  console.log("abc")
};

export default middleware2;

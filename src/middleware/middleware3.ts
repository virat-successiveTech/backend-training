import { Request, Response, NextFunction } from 'express';

const middleware3 = (req: Request, res: Response, next: NextFunction): void => {
  console.log('Middleware 3: Before response');
  next();
  console.log("aaaa")
};

export default middleware3;

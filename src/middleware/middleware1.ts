import { Request, Response, NextFunction } from 'express';

const middleware1 = (req: Request, res: Response, next: NextFunction): void => {
  console.log('Middleware 1: Start');

  next(); 
  console.log('Middleware 1: End'); 
};

export default middleware1;

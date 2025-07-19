import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export const validateUserInput = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, age } = req.body;


  if (!name || typeof name !== 'string') {
    return next(createError(422, 'Invalid or missing "name"'));
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return next(createError(422, 'Invalid or missing "email"'));
  }

  if (typeof age !== 'number' || age < 18) {
    return next(createError(422, '"age" must be a number and at least 18'));
  }

  res.json({
    message: 'User input is valid',
    data: { name, email, age },
  });
};

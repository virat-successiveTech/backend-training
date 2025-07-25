import { Request, Response, NextFunction } from 'express';

export const checkRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = req.headers['x-user-role'];

    if (!allowedRoles.includes(role as string)) {
      return res.status(403).json({ message: 'Access denied: insufficient role' });
    }

    next();
  };
};

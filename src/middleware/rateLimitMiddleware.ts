import { Request, Response, NextFunction } from "express";

let count = 0;
let startTime = Date.now();
export const basicLimiter = (limit: number, windowTime: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();

   if (now - startTime > windowTime) {
      count = 0;
      startTime = now;
    }

    if (count < limit) {
      count++;
      next(); 
    } else {
      res.status(429).json({ message: "Two many requests." });
    }
  };
};
// basicLimiter.ts
import { Request, Response, NextFunction } from "express";

class BasicLimiter {
  private count: number;
  private startTime: number;
  private limit: number;
  private windowTime: number;

  constructor(limit: number, windowTime: number) {
    this.limit = limit;
    this.windowTime = windowTime;
    this.count = 0;
    this.startTime = Date.now();
  }

  public limitRequests = (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();

    if (now - this.startTime > this.windowTime) {
      this.count = 0;
      this.startTime = now;
    }

    if (this.count < this.limit) {
      this.count++;
      next();
    } else {
      res.status(429).json({ message: "Too many requests." });
    }
  };
}

// Factory function to create a new instance for each limiter config
export const createBasicLimiter = (limit: number, windowTime: number) => {
  const limiter = new BasicLimiter(limit, windowTime);
  return limiter.limitRequests;
};

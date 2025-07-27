import { Request, Response, NextFunction } from "express";

class LoggerMiddleware {
  logRequest(req: Request, res: Response, next: NextFunction): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next();
  }
}

// Export an instance method for use in middleware
export const loggerMiddleware = new LoggerMiddleware().logRequest.bind(new LoggerMiddleware());

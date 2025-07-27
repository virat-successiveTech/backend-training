import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export class ErrorTestController {
  async asyncFailingRoute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Simulate an async operation that fails
      await new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Async failure')), 500)
      );
    } catch (err) {
      next(createError(500, 'Async Error: Something went wrong'));
    }
  }
}

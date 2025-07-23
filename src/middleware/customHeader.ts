import { Request, Response, NextFunction } from 'express';

export class CustomHeaderMiddleware {
  private headerName: string;
  private headerValue: string;

  constructor(headerName: string, headerValue: string) {
    this.headerName = headerName;
    this.headerValue = headerValue;
  }

  handle(req: Request, res: Response, next: NextFunction): void {
    res.setHeader(this.headerName, this.headerValue);
    next();
  }
}

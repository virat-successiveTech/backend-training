import { Request, Response, NextFunction } from 'express';

const validateNumericQuery = (params: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: string[] = [];

    for (const param of params) {
      const value = req.query[param];

  
      if (value !== undefined) {
        const numericValue = Number(value);

        if (isNaN(numericValue)) {
          errors.push(`Query parameter "${param}" must be a numeric value.`);
        }
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    next();
  };
};

export default validateNumericQuery;

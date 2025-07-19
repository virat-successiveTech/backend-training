import { Request, Response, NextFunction } from 'express';
import validationRules from '../config/validationRules';

const dynamicValidation = (req: Request, res: Response, next: NextFunction) => {
  const routePath = req.route?.path || req.path; 

  const schema = validationRules[routePath];

  if (!schema) {
    return next(); 
  }

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map(detail => detail.message);
    return res.status(400).json({ errors });
  }

  next();
};

export default dynamicValidation;

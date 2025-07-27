import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';


const registrationSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.base': `"username" should be a type of 'text'`,
      'string.empty': `"username" cannot be empty`,
      'string.min': `"username" should have a minimum length of {#limit}`,
      'any.required': `"username" is a required field`,
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': `"email" must be a valid email`,
      'any.required': `"email" is required`,
    }),

  password: Joi.string()
    .required()
    .messages({
      'string.pattern.base': `"password" must be at least 8 characters long and include uppercase, lowercase, number, and special character`,
      'any.required': `"password" is required`,
    }),
});

const validateRegisterInput = (req: Request, res: Response, next: NextFunction) => {
  const { error } = registrationSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors });
  }

  next();
};

export default validateRegisterInput;

import Joi from 'joi';

const validationRules: { [route: string]: Joi.ObjectSchema } = {
  '/api/users/register': Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/)
      .required()
      .messages({
        'string.pattern.base': 'Password must contain uppercase, lowercase, number, and special character',
      }),
  }),

  '/api/users/login': Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  '/api/posts/create': Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(10).required(),
  }),
};

export default validationRules;

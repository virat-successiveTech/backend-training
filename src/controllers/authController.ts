import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import User from '../models/User';

const registerSchema = Joi.object({
  name: Joi.string().max(13).min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { error, value } = registerSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, password } = value;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

import { Request, Response } from 'express';
import { userSchema } from '../validation/userSchema';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Simulate user creation
    return res.status(201).json({ message: 'User registered successfully!', user: value });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

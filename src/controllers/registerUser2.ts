import { Request, Response } from 'express';
import User2, { IUser2 } from '../models/User2';
import { registerSchema } from '../validations/user2Validation';

export const registerUser = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, password, role } = value;

    const allowedRoles = ['user', 'admin', 'manager'];
    const assignedRole = allowedRoles.includes(role) ? role : 'user';

    const newUser: IUser2 = new User2({
      name,
      email,
      password, // Hash in production
      role: assignedRole,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

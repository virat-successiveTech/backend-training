import { Request, Response } from 'express';
import User2 from '../models/User2';

export const loginUser2 = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User2.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Dummy login; in production return JWT
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

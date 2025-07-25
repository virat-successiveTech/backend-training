import express from 'express';
import { registerUser } from '../controllers/registerUser2';
import { loginUser2 } from '../controllers/loginUser2';
import { checkRole } from '../middleware/checkRole';


const user2 = express.Router();

// Public routes
user2.post('/register', registerUser);
user2.get('/login',loginUser2);
// Example protected route (only admin)
user2.get('/admin-only', checkRole(['admin']), (req, res) => {
  res.send('Hello Admin!');
});

export default user2;

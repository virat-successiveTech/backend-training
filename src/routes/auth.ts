import express from 'express';
import { registerUser } from '../controllers/authController';
import { loginUser } from '../controllers/authLogin';

const routes = express.Router();

routes.post('/register', registerUser);
routes.get('/login',loginUser);

export default routes;

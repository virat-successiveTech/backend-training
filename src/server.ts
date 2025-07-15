// src/server.ts
import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

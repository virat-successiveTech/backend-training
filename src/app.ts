import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import { mockList } from './mockData';

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());


app.get('/api/mock', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: mockList,
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

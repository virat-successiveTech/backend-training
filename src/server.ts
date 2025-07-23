
import express from 'express';
import createError from 'http-errors'

import route from './routes/healthCheckRoutes';
import router from './routes/userRoutes';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import errorHandler from './middleware/errorHandler';

import { createBasicLimiter } from './middleware/rateLimitMiddleware';
const app = express();
const PORT = process.env.PORT || 3000;



app.use(createBasicLimiter(3,30000))
app.use(express.json());
app.use(loggerMiddleware);



app.use('/api/users', router);
app.use('/api/users',route);  


app.use((req, res, next) => {

  next(createError(404, 'Not Found'));

});
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
function basicLimiter(arg0: number, arg1: number): any {
  throw new Error('Function not implemented.');
}


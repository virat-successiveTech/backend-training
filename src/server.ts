
import express from 'express';
import createError from 'http-errors'

import router from './routes/userRoutes';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import errorHandler from './middleware/errorHandler';
import customHeaderMiddleware from './middleware/customHeader';
import { basicLimiter } from './middleware/rateLimitMiddleware';
const app = express();
const PORT = process.env.PORT || 3000;



app.use(basicLimiter(3,30000))
app.use(express.json());
app.use(loggerMiddleware);
app.use(customHeaderMiddleware("Virat","Tripathi"))


app.use('/api/users', router);
app.use(errorHandler);

app.use((req, res, next) => {

  next(createError(404, 'Not Found'));

});
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

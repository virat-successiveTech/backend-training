
import express from 'express';
import createError from 'http-errors'

import route from './routes/healthCheckRoutes';
import router from './routes/userRoutes';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import errorHandler from './middleware/errorHandler';
import countriesRoute from './routes/countries';
import connectDB from './config/database';
import routes from './routes/auth';
import user2 from './routes/auth2';

import { createBasicLimiter } from './middleware/rateLimitMiddleware';
import { seedCountries } from './scripts/seed';
const app = express();
const PORT = process.env.PORT || 3000;



app.use(createBasicLimiter(3,30000))
app.use(express.json());
app.use(loggerMiddleware);



app.use('/api/users', router);
app.use('/api/users',route); 
app.use('/api/countries', countriesRoute); 
app.use('/api/auth',routes);
app.use('/User2',user2);



app.use((req, res, next) => {

  next(createError(404, 'Not Found'));

});
app.use(errorHandler);


connectDB()
  .then(async () => {
    await seedCountries(); //  Automatically seed on startup
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
  });

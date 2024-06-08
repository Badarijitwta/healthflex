import express from 'express';
import userRoutes from './interfaces/routes/userRoutes.js';
import tweetRoutes from './interfaces/routes/tweetRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

export default app;

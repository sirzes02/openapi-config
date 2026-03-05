import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import healthRoutes from './routes/health.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/health', healthRoutes);

export default app;

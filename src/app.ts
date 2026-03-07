import express from 'express';
import cors from 'cors';
import barberShop from './routes/barberShop.routes.js';
import healthRoutes from './routes/health.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/barber_shops', barberShop);
app.use('/api/health', healthRoutes);

export default app;

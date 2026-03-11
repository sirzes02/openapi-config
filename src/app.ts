import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import barberShop from './routes/barberShop.routes.js';
import healthRoutes from './routes/health.route.js';
import { swaggerSpec } from './config/swagger.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);

app.use('/api/barber_shops', barberShop);
app.use('/api/health', healthRoutes);

app.get('/docs/openapi.json', (_, res) => res.json(swaggerSpec));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;

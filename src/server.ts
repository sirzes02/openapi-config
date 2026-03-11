import app from './app.js';
import { ENV } from './config/env.js';
import { logger } from './config/logger.js';
import { prisma } from './libs/prisma.js';

app.listen(ENV.PORT, async () => {
  await prisma.$connect();
  logger.info('✅ Database connected');
  logger.info(`🚀 Server running on port ${ENV.PORT}`);
});

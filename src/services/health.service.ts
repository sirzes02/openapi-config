import type { Health } from '../models/health.model.js';

export const getHealth = (): Health => {
  return {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV ?? 'development',
  };
};

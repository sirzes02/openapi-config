import type { Request, Response } from 'express';
import * as healthService from '../service/health.service.js';

export const checkHealth = (_req: Request, res: Response) => {
  res.status(200).json(healthService.getHealth());
};

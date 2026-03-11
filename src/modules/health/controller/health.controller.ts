import type { Request, Response } from 'express';
import * as healthService from '../service/health.service.js';

export const checkHealth = (req: Request, res: Response) => {
  req.log.info('Entering checkHealth controller');

  res.status(200).json(healthService.getHealth());
};

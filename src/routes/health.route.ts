import { Router } from 'express';
import * as healthController from '../modules/health/controller/health.controller.js';

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Checking health
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Health API
 */
router.get('/', healthController.checkHealth);

export default router;

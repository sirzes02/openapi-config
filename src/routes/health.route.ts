import { Router } from 'express';
import * as healthController from '../modules/health/controller/health.controller.js';

const router = Router();

router.get('/', healthController.checkHealth);

export default router;

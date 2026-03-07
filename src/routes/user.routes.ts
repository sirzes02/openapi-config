import { Router } from 'express';
import * as userController from '../modules/user/controller/user.controller.js';

const router = Router();

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

export default router;

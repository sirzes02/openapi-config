import { Router } from 'express';
import * as barberShopController from '../modules/barberShop/barberShop.controller.js';

const router = Router();

router.get('/', barberShopController.getUsers);
router.post('/', barberShopController.createUser);

export default router;

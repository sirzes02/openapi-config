import { Router } from 'express';
import * as barberShopController from '../modules/barberShop/barberShop.controller.js';

const router = Router();

router.get('/', barberShopController.getBarberShops);
router.post('/', barberShopController.createBarberShop);
router.delete('/', barberShopController.deleteBarberShop);

export default router;

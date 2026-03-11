import { Router } from 'express';
import * as barberShopController from '../modules/barberShop/barberShop.controller.js';

const router = Router();

/**
 * @openapi
 * /api/barber_shops:
 *   get:
 *     summary: Get all barbershops
 *     tags:
 *       - BarberShop
 *     responses:
 *       200:
 *         description: BarberShop list
 */
router.get('/', barberShopController.getBarberShops);

/**
 * @openapi
 * /api/barber_shops:
 *   post:
 *     summary: Create barbershop
 *     tags:
 *       - BarberShop
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Barbershop name
 *               phone:
 *                 type: string
 *                 description: Barbershop phone
 *               address:
 *                 type: string
 *                 description: Barbershop address
 *     responses:
 *       200:
 *         description: Barbershop created
 */
router.post('/', barberShopController.createBarberShop);

/**
 * @openapi
 * /api/barber_shops/{id}:
 *   delete:
 *     summary: Delete barbershop
 *     tags:
 *       - BarberShop
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Barbershop ID
 *     responses:
 *       200:
 *         description: Barbershop removed
 */
router.delete('/:id', barberShopController.deleteBarberShop);

export default router;

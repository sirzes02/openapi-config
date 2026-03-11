import type { Request, Response } from 'express';
import * as userService from './barberShop.service.js';
import type { CreateBarbershopDTO } from './dto/generalDtos.js';

export const getBarberShops = async (req: Request, res: Response) => {
  req.log.info('Entering getBarberShops controller');

  res.json(await userService.getBarberShops());
};

export const createBarberShop = async (req: Request, res: Response) => {
  req.log.info('Entering createBarberShop controller');

  const dto: CreateBarbershopDTO = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
  };
  const user = await userService.createBarberShop(dto);

  res.status(201).json(user);
};

export const deleteBarberShop = async (req: Request, res: Response) => {
  req.log.info('Entering deleteBarberShop controller');

  const { id } = req.params;
  const user = await userService.deleteBarberShop(id as string);

  res.status(201).json(user);
};

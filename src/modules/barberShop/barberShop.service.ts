import type { Barbershop } from '@prisma/client';
import { prisma } from '../../libs/prisma.js';
import type { BarberShopId, CreateBarbershopDTO } from './dto/generalDtos.js';

export const getBarberShops = async (): Promise<Barbershop[]> => {
  const barberShops = await prisma.barbershop.findMany();
  return barberShops;
};

export const createBarberShop = async (
  user: CreateBarbershopDTO,
): Promise<Barbershop> => {
  const newBarbershop = await prisma.barbershop.create({ data: user });
  return newBarbershop;
};

export const deleteBarberShop = async (id: BarberShopId): Promise<Barbershop> => {
  const newBarbershop = await prisma.barbershop.update({
    where: { id: id },
    data: { isActive: false },
  });
  return newBarbershop;
};

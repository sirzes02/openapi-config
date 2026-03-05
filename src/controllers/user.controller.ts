import type { Request, Response } from "express";
import * as userService from "../services/user.service.js";

export const getUsers = (_: Request, res: Response) => {
  res.json(userService.getUsers());
};

export const createUser = (req: Request, res: Response) => {
  const user = userService.createUser(req.body);
  res.status(201).json(user);
};
import type { User } from '../models/user.model.js';

const users: User[] = [];

export const getUsers = () => users;

export const createUser = (user: User) => {
  users.push(user);
  return user;
};

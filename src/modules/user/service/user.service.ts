import type { User } from '../model/user.model.js';

const users: User[] = [];

export const getUsers = (): User[] => users;

export const createUser = (user: User): User => {
  users.push(user);
  return user;
};

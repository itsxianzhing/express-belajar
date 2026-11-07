import bcrypt from "bcryptjs";

import * as userRepository from "./user.repository.js";

export const createUser = async (data) => {

  // Business Rule 1: Email must be unique
  const existingUser = await userRepository.findByEmail(data.email);

  if (existingUser) {
    const error = new Error("Email already registered");
    error.statusCode = 409;
    throw error;
  }

  // Business Rule 2: Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Save user
  const user = await userRepository.create({
    name: data.name,
    email: data.email,
    password: hashedPassword
  });

  return user;
};
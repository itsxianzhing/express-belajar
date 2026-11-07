import prisma from "../../config/database.js";

export const findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email }
  });
};

export const create = async (data) => {
  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password
    }
  });
};
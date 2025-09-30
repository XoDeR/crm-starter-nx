import { prismadb } from '@/lib/prisma';

// Get all users for admin users
export const getUsers = async () => {
  const data = await prismadb.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
};
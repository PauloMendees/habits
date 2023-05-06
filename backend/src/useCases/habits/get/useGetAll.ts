import prisma from '../../../lib/prisma';
import { getIdByToken } from '../../../providers/jwt';

export async function useGetAllHabits(authToken: string) {
  const userId = getIdByToken(authToken);

  const habits = await prisma.habit.findMany({
    where: {
      user_id: userId,
    },
    include: {
      weekDays: true,
    },
  });

  return habits;
}

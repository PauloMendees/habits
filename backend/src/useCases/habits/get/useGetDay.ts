import dayjs from 'dayjs';
import prisma from '../../../lib/prisma';
import { getIdByToken } from '../../../providers/jwt';

interface Params {
  date: Date;
  authToken: string;
}

export async function useGetDay({ date, authToken }: Params) {
  const userId = getIdByToken(authToken);

  const parsedDate = dayjs(date).startOf('day');
  const weekDay = parsedDate.get('day');
  await prisma.$connect();
  const possibleHabits = await prisma.habit.findMany({
    where: {
      user_id: userId,
      created_at: {
        lte: date,
      },
      weekDays: {
        some: {
          week_day: weekDay,
        },
      },
    },
  });

  const completedHabits = await prisma.completedDayHabits.findMany({
    where: {
      day: {
        date: parsedDate.toDate(),
      },
      user_id: userId,
    },
  });

  const completedHabitsIds = completedHabits.map((habit) => habit.habit_id);

  await prisma.$disconnect();

  return {
    possibleHabits,
    completedHabits: {
      ids: completedHabitsIds,
      percentage: completedHabits.length / possibleHabits.length,
    },
  };
}

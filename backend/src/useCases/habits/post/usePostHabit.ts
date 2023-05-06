import dayjs from 'dayjs';
import prisma from '../../../lib/prisma';
import { getIdByToken } from '../../../providers/jwt';

interface Params {
  title: string;
  weekDays: number[];
  authToken: string;
}

export async function usePostHabit({ title, weekDays, authToken }: Params) {
  const today = dayjs().startOf('day').toDate();

  const userId = getIdByToken(authToken);

  await prisma.$connect();
  const habit = await prisma.habit.create({
    data: {
      title,
      created_at: today,
      weekDays: {
        create: weekDays.map((day) => {
          return {
            week_day: day,
            user_id: userId,
          };
        }),
      },
      user_id: userId,
    },
  });
  await prisma.$disconnect();

  return habit;
}

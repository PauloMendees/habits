import { CompletedDayHabits, Day, Habit, HabitWeekDay } from '@prisma/client';

export const fakeJWT =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWQiOjE1MTYyMzkwMjJ9.XVx3jbaPQvulCykqG6IS6-4khpUlGC3SqBKXVRAodFg';
export const fakeID = '1516239022';
export const fakeSecret = 'your-256-bit-secret';
export const fakeDate = new Date();

export const mockedHabit: Habit = {
  created_at: new Date(),
  id: fakeID,
  title: 'test',
  user_id: fakeID,
};

export const mockedDay: Day = {
  date: new Date(),
  id: fakeID,
  user_id: fakeID,
};

export const mockedCompletedDayHabit: CompletedDayHabits = {
  day_id: fakeID,
  habit_id: fakeID,
  id: fakeID,
  user_id: fakeID,
};

export const mockedPossibleHabits: Habit[] = [
  {
    created_at: fakeDate,
    id: fakeID,
    title: 'test',
    user_id: fakeID,
  },
];

export const mockCompleteDayHabits: CompletedDayHabits[] = [
  {
    day_id: fakeID,
    habit_id: fakeID,
    id: fakeID,
    user_id: fakeID,
  },
];

export const mockedDaysWithCompletedHabits: (Day & {
  completedHabits: CompletedDayHabits[];
})[] = [
  {
    id: fakeID,
    date: new Date('2015-03-25'),
    user_id: fakeID,
    completedHabits: [
      {
        day_id: fakeID,
        habit_id: fakeID,
        id: fakeID,
        user_id: fakeID,
      },
      {
        day_id: fakeID,
        habit_id: fakeID,
        id: fakeID,
        user_id: fakeID,
      },
    ],
  },
  {
    id: fakeID,
    date: fakeDate,
    user_id: fakeID,
    completedHabits: [
      {
        day_id: fakeID,
        habit_id: fakeID,
        id: fakeID,
        user_id: fakeID,
      },
      {
        day_id: fakeID,
        habit_id: fakeID,
        id: fakeID,
        user_id: fakeID,
      },
    ],
  },
];

export const mockedHabitsWithWeekDay: (Habit & {
  weekDays: HabitWeekDay[];
})[] = [
  {
    created_at: fakeDate,
    id: fakeID,
    title: 'teste',
    user_id: fakeID,
    weekDays: [
      {
        habit_id: fakeID,
        id: fakeID,
        user_id: fakeID,
        week_day: 1,
      },
      {
        habit_id: fakeID,
        id: fakeID,
        user_id: fakeID,
        week_day: 2,
      },
      {
        habit_id: fakeID,
        id: fakeID,
        user_id: fakeID,
        week_day: 6,
      },
    ],
  },
];

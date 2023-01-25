export type PostPayload = {
  title: string;
  weekDays: number[];
};

export type Summary = {
  amount: number;
  completed: number;
  date: string;
  id: string;
};

export type GetDayQueryParams = {
  date: string;
};

export type PossibleHabit = {
  created_at: string;
  id: string;
  title: string;
};

export type CompletedHabit = {
  ids: string[];
  percentage: number;
};

export type GetDayResponse = {
  completedHabits: CompletedHabit;
  possibleHabits: PossibleHabit[];
};

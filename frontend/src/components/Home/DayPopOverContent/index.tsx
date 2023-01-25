import { Checkbox } from '@/components/shared/Checkbox';
import { ProgressBar } from '@/components/shared/ProgressBar';
import useGetDay from '@/hooks/habits/useGetDay';
import useDayPopOver from './hooks/useDayPopOver';
import { LoadingPopover } from './LoadingPopover';

interface Params {
  date: string;
}

export const DayPopOverContent = ({ date }: Params) => {
  const { dayAndMonth, dayName, onCheck } = useDayPopOver(date);
  const { data: dayHabit, isLoading } = useGetDay({ date: date });

  return isLoading ? (
    <LoadingPopover />
  ) : (
    <div className="w-full flex flex-col gap-4 items-start max-h-[400px] overflow-auto">
      <div className="flex flex-col">
        <span className="text-base font-semibold text-zinc-400">{dayName}</span>
        <span className="text-white-primary text-[24px] lg:text-[32px] font-extrabold">
          {dayAndMonth}
        </span>
      </div>
      <ProgressBar percentage={dayHabit?.data.completedHabits.percentage || 0} />
      {dayHabit?.data.possibleHabits.map((habit, i) => (
        <Checkbox
          checked={dayHabit.data.completedHabits.ids.includes(habit.id)}
          key={`${habit.title}_${i}`}
          id={habit.id}
          label={habit.title}
          onCheckedChange={() => {
            onCheck(habit.id, date);
          }}
        />
      ))}
    </div>
  );
};

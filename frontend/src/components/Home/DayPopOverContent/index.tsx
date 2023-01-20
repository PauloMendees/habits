import { Checkbox } from '@/components/shared/Checkbox';
import { ProgressBar } from '@/components/shared/ProgressBar';
import useDayPopOver from './hooks/useDayPopOver';

interface Params {
  date: string;
}

export const DayPopOverContent = ({ date }: Params) => {
  const { dayAndMonth, dayName } = useDayPopOver(date);

  return (
    <div className="w-full flex flex-col gap-4 items-start">
      <div className="flex flex-col">
        <span className="text-base font-semibold text-zinc-400">{dayName}</span>
        <span className="text-white-primary text-[24px] lg:text-[32px] font-extrabold">
          {dayAndMonth}
        </span>
      </div>
      <ProgressBar percentage={75} />
      <Checkbox id="test" label="test" />
    </div>
  );
};

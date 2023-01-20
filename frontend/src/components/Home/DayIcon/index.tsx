import colors from '@/theme/colors';
import React, { useMemo } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { DayPopOverContent } from '../DayPopOverContent';
import clsx from 'clsx';

interface Props {
  completed: number;
  amount: number;
  date: string;
}

export function DayIcon({ amount, completed, date }: Props) {
  const percentage = Math.round((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 rounded-lg border-2', {
          'bg-zinc-900 border-zinc-800': percentage === 0,
          'bg-violet-900 border-violet-800': percentage > 0 && percentage < 20,
          'bg-violet-800 border-violet-700': percentage >= 20 && percentage < 40,
          'bg-violet-700 border-violet-600': percentage >= 40 && percentage < 60,
          'bg-violet-600 border-violet-500': percentage >= 60 && percentage < 80,
          'bg-violet-500 border-violet-400': percentage >= 80,
        })}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[374px] bg-zinc-900 rounded-2xl p-6">
          <DayPopOverContent date={date} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

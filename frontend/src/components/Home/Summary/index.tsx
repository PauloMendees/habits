import React from 'react';
import { DayIcon } from '../DayIcon';
import useSummary from './hooks/useSummary';
import { LoadingSummary } from './LoadingSummary';

export function Summary() {
  const { days, summaryDates, amountOfDaysToFill, summary, isLoading } = useSummary();

  return isLoading ? (
    <LoadingSummary />
  ) : (
    <div className="w-full max-w-[1000px] flex">
      <div className="grid grid-rows-7 grid-flow-row gap-2 text-zinc-400 font-bold">
        {days.map((day, i) => (
          <span key={i} className="text-xl w-10 h-10 flex items-center justify-center">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-2 text-zinc-400 font-bold overflow-x-auto">
        <>
          {summaryDates.map((date) => (
            <DayIcon
              date={date.toISOString()}
              key={date.toString()}
              amount={summary?.data.find((item) => item.date === date.toISOString())?.amount || 0}
              completed={
                summary?.data.find((item) => item.date === date.toISOString())?.completed || 0
              }
            />
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-lg bg-zinc-900 opacity-40" />
            ))}
        </>
      </div>
    </div>
  );
}

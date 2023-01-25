import React from 'react';
import useSummary from '../hooks/useSummary';

export function LoadingSummary() {
  const { days, summaryDates, amountOfDaysToFill } = useSummary();

  return (
    <div className="w-full max-w-[1000px] flex animate-pulse">
      <div className="grid grid-rows-7 grid-flow-row gap-2 text-zinc-400 font-bold">
        {days.map((day, i) => (
          <span key={i} className="text-xl w-10 h-10 flex items-center justify-center">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-2 text-zinc-400 font-bold overflow-x-auto">
        <>
          {summaryDates.map((date, i) => (
            <div key={i} className="w-10 h-10 rounded-lg bg-zinc-900 opacity-40" />
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

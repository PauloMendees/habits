import { Checkbox } from '@/components/shared/Checkbox';
import { ProgressBar } from '@/components/shared/ProgressBar';
import React from 'react';

export function LoadingPopover() {
  return (
    <div className="w-full flex flex-col gap-4 items-start animate-pulse">
      <div className="flex flex-col">
        <span className="text-base font-semibold text-zinc-400">--</span>
        <span className="text-white-primary text-[24px] lg:text-[32px] font-extrabold">00/00</span>
      </div>
      <ProgressBar percentage={100} />
      <Checkbox id="1" label={'---'} />
      <Checkbox id="2" label={'---'} />
      <Checkbox id="3" label={'---'} />
      <Checkbox id="4" label={'---'} />
    </div>
  );
}

import React from 'react';

interface Props {
  percentage: number;
}

export const ProgressBar = ({ percentage }: Props) => {
  return (
    <div className="w-full h-3 rounded-xl bg-zinc-700">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={percentage / 100}
        className="bg-brand-purple w-3/4 h-full rounded-xl"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};

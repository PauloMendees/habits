import React, { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
  isFullWidth?: boolean;
};

export const Input = ({ label, id, isFullWidth, ...rest }: Props) => {
  return (
    <>
      {label ?? (
        <label htmlFor={id}>
          <span className="text-base font-semibold">{label}</span>
        </label>
      )}
      <input
        id={id}
        {...rest}
        className={`${
          isFullWidth ? 'w-full' : ''
        } bg-zinc-800 rounded-lg placeholder:text-zinc-400 text-white-secondary outline-none h-[52px] flex items-center px-6`}
      />
    </>
  );
};

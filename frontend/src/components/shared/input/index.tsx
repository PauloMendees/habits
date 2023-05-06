import clsx from 'clsx';
import React, { InputHTMLAttributes, useState } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
  isFullWidth?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};

export const Input = ({ label, id, isFullWidth, endIcon, startIcon, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <>
      {label ?? (
        <label htmlFor={id}>
          <span className="text-base font-semibold">{label}</span>
        </label>
      )}
      <div
        className={clsx(
          `${
            isFullWidth ? 'w-full' : ''
          } flex items-center gap-4 justify-between bg-zinc-800 rounded-lg h-[52px] px-4 border ${
            isFocused ? 'border-brand-purple' : 'border-transparent'
          } duration-200`,
        )}
      >
        {startIcon}
        <input
          id={id}
          {...rest}
          className={`w-full placeholder:text-zinc-400 text-white-secondary outline-none h-[50px] flex items-center bg-transparent`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {endIcon}
      </div>
    </>
  );
};

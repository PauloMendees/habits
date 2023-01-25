import LoadingIcon from '@/assets/icons/Loading';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
  isFullWidth?: boolean;
};

export function FakeButton({ children, isOutlined, isFullWidth }: Props) {
  return (
    <div
      className={`${
        isFullWidth ? 'w-full' : ''
      } px-2 lg:px-6 py-4 flex gap-3 rounded-lg text-white-primary hover:opacity-70 duration-200 justify-center items-center ${
        isOutlined ? 'bg-transparent border border-brand-purple font-semibold' : ' bg-brand-purple '
      }`}
    >
      {children}
    </div>
  );
}

export function Button({ onClick, type, children, isOutlined, isFullWidth, isLoading, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`${
        isFullWidth ? 'w-full' : ''
      } min-h-[50px] px-2 lg:px-6 flex gap-3 rounded-lg text-white-primary hover:opacity-70 duration-200 justify-center items-center ${
        isOutlined ? 'bg-transparent border border-brand-purple font-semibold' : ' bg-brand-purple '
      }`}
    >
      {isLoading ? (
      <LoadingIcon />
      ) : children}
     </button>
  );
}

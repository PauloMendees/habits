import { Close } from '@/assets/icons/Close';
import colors, { alerts } from '@/theme/colors';
import React from 'react';

interface Props {
  message: string;
  type: 'error' | 'success' | '';
  reset: () => void;
  withClose: boolean;
}

export function Toast({ message, type, reset, withClose }: Props) {
  return (
    <div
      className={`absolute ${
        message && type
          ? 'animate-topToBottom opacity-100 top-8 visible'
          : 'invisible top-0 opacity-0'
      } duration-300 min-w-[250px] min-h-[40px] flex items-center justify-center rounded-lg left-1/2 -translate-x-1/2 z-[9999]`}
      style={{
        backgroundColor: type === 'error' ? colors.alerts.red : colors.alerts.green,
      }}
    >
      <span className="text-sm text-white-primary">{message}</span>
      {withClose ?? (
        <button
          className="absolute right-4 hover:opacity-70 duration-200 cursor-pointer"
          onClick={reset}
        >
          <Close height="15px" width="15px" fill="white" />
        </button>
      )}
    </div>
  );
}

import React from 'react';
import { IconInterface } from './interface';

export function Check({ fill, height, width }: IconInterface) {
  return (
    <svg
      width={width ? width : '21'}
      height={height ? height : '20'}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.375 5.625L8.625 14.375L4.25 10"
        stroke="white"
        strokeWidth="1.88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

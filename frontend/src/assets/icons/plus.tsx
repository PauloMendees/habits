import React from 'react';
import { IconInterface } from './interface';

export function Plus({ fill, height, width }: IconInterface) {
  return (
    <svg
      width={width ? width : '21'}
      height={height ? height : '20'}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.55756 10H17.3076"
        stroke={fill ? fill : '#8B5CF6'}
        strokeWidth="1.88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4326 3.125V16.875"
        stroke={fill ? fill : '#8B5CF6'}
        strokeWidth="1.88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

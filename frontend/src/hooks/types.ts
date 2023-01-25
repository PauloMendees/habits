import { UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export type ReactQueryOptions =
  | Omit<
      UseQueryOptions<AxiosResponse<any, any>, unknown, AxiosResponse<any, any>, string[]>,
      'queryKey' | 'queryFn'
    >
  | undefined;

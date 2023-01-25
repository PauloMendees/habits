import { ReactNode } from 'react';

export interface DispatchParams {
  type: 'error' | 'success';
  message: string;
  withClose: boolean;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export interface ToastContextValue {
  toast: (params: DispatchParams) => void;
}

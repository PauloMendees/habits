import { Toast } from '@/components/shared/Toast';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DispatchParams, ToastContextValue, ToastProviderProps } from './types';
import { createPortal } from 'react-dom';

const ToastContext = createContext<ToastContextValue>({} as ToastContextValue);

export function ToastProvider({ children }: ToastProviderProps) {
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<'error' | 'success' | ''>('');
  const [withClose, setWithClose] = useState<boolean>(false);

  function reset() {
    setType('');
    setMessage('');
  }

  function toast(params: DispatchParams) {
    setWithClose(params.withClose);
    setType(params.type);
    setMessage(params.message);
    autoClear();
  }

  async function autoClear() {
    await setTimeout(() => {
      reset();
    }, 2000);
  }

  const contextValue: ToastContextValue = useMemo(
    () => ({
      toast,
    }),
    [toast],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <Toast message={message} type={type} reset={reset} withClose={withClose} />
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);

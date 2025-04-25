import React, { createContext, useContext, useState, useCallback } from "react";

import { Toast, ToastContextType } from "base";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {}, []);

  const addToast = (
    message: string,
    info?: Partial<Pick<Toast, "type" | "position">>
  ) => {};

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("useToastContext must be used within ToastProvider");
  return context;
};

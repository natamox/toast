import { useToastContext } from "../context/ToastContext";

export const ToastContainer = () => {
  const { toasts, removeToast } = useToastContext();

  return <div></div>;
};

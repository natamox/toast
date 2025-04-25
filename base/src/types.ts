export type ToastType = "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "top"
  | "bottom"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  position: ToastPosition;
}

export type AddToast = (
  message: string,
  info?: Partial<Pick<Toast, "type" | "position">>
) => void;

export type RemoveToast = (id: number) => void;

export type ToastContextType = {
  toasts: Toast[];
  addToast: AddToast;
  removeToast: RemoveToast;
};

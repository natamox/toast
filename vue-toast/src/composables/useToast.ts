import { ref } from "vue";

import { Toast } from "base";

const toasts = ref<Toast[]>([]);

function addToast(
  message: string,
  info?: Partial<Pick<Toast, "type" | "position">>
) {}

function removeToast(id: number) {}

export function useToast() {
  return { addToast };
}

export function useToastContext() {
  return { toasts, removeToast };
}

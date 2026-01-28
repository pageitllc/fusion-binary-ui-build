export type ToastType = "success" | "error" | "info" | "dark";
export interface ToastOptions {
    message: string;
    type?: ToastType;
    duration?: number;
}
/**
 * Programmatic toast composable
 * Usage:
 * const toast = useToast();
 * toast({ message: "Saved!", type: "success" });
 */
export declare function useToast(): ({ message, type, duration }: ToastOptions) => void;

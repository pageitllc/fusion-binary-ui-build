type __VLS_Props = {
    isVisible: boolean;
    title: string;
    message: string;
    variant?: "delete" | "warning" | "confirm";
    confirmText?: string;
    cancelText?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: () => any;
    confirm: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    variant: "delete" | "warning" | "confirm";
    confirmText: string;
    cancelText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

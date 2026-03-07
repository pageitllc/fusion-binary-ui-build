interface Option {
    label: string;
    color: string;
}
type __VLS_Props = {
    modelValue: Option | null;
    options: Option[];
    placeholder?: string;
    isOpen?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:modelValue": (value: Option) => any;
    open: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: Option) => any) | undefined;
    onOpen?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inlineRef: HTMLDivElement;
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;

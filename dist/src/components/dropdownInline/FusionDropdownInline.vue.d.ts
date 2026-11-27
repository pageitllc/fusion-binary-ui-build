interface Option {
    label: string;
    color: string;
}
type __VLS_Props = {
    modelValue: Option | null;
    options: Option[];
    placeholder?: string;
    isOpen?: boolean;
    disabled?: boolean;
    readonly?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    open: () => any;
    "update:modelValue": (value: Option) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: Option) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inlineRef: HTMLDivElement;
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;

interface Props {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    size?: "sm" | "md" | "lg";
    variant?: "subtle" | "outline" | "plain";
    disabled?: boolean;
    error?: string | null;
    required?: boolean;
    formWrapperWidth?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    error: string | null;
    required: boolean;
    disabled: boolean;
    placeholder: string;
    label: string;
    size: "sm" | "md" | "lg";
    modelValue: string;
    variant: "subtle" | "outline" | "plain";
    formWrapperWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

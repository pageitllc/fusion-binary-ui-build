interface Props {
    modelValue?: string;
    label?: string;
    length?: number;
    size?: "sm" | "md" | "lg";
    variant?: "outline" | "subtle" | "plain";
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
    length: number;
    required: boolean;
    disabled: boolean;
    label: string;
    size: "sm" | "md" | "lg";
    modelValue: string;
    variant: "outline" | "subtle" | "plain";
    formWrapperWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

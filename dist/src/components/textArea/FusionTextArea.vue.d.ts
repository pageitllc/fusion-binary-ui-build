interface Props {
    modelValue?: string;
    label?: string;
    variant?: "subtle" | "outline" | "plain";
    placeholder?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    error?: string | null;
    rows?: number;
    required?: boolean;
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
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

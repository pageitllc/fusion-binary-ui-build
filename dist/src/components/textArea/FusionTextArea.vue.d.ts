interface Props {
    modelValue?: string;
    label?: string;
    variant?: "subtle" | "outline" | "plain" | "typeform";
    placeholder?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    readonly?: boolean;
    error?: string | null;
    rows?: number;
    required?: boolean;
    font?: string;
    color?: string;
    fontSize?: string;
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
    color: string;
    modelValue: string;
    readonly: boolean;
    variant: "subtle" | "outline" | "plain" | "typeform";
    font: string;
    fontSize: string;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    textareaRef: HTMLTextAreaElement;
}, HTMLDivElement>;
export default _default;

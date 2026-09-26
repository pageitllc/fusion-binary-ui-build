type Size = "sm" | "md" | "lg";
interface Option {
    value: string | number;
    label: string;
    /** A Lucide icon component, OR an image URL string — both are supported. */
    icon?: any;
}
interface Props {
    modelValue?: (string | number)[];
    options: Option[];
    size?: Size;
    disabled?: boolean;
    readonly?: boolean;
    font?: string;
    fontSize?: string;
    color?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: (string | number)[]) => any) | undefined;
}>, {
    disabled: boolean;
    size: Size;
    color: string;
    modelValue: (string | number)[];
    readonly: boolean;
    font: string;
    fontSize: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

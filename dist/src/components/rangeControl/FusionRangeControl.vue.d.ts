interface Props {
    modelValue: number | string;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    unit?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
    "update:modelValue": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    label: string;
    modelValue: number | string;
    max: number;
    min: number;
    step: number;
    unit: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

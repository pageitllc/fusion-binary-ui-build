type __VLS_Props = {
    modelValue?: boolean;
    label?: string;
    id?: string;
    size?: "sm" | "md";
    disabled?: boolean;
    /** Shows a red * after the label and sets aria-required. Visual only: no validation. */
    required?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    required: boolean;
    size: "sm" | "md";
    modelValue: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
export default _default;

interface Props {
    modelValue?: string[];
    label?: string;
    placeholder?: string;
    hint?: string;
    helperText?: string;
    disabled?: boolean;
    readonly?: boolean;
    /** "email" runs basic email-shape validation before a tag is accepted */
    validate?: "email" | ((value: string) => boolean);
    error?: string | null;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    invalid: (value: string) => any;
    "update:modelValue": (value: string[]) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onInvalid?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
}>, {
    error: string | null;
    disabled: boolean;
    placeholder: string;
    label: string;
    modelValue: string[];
    readonly: boolean;
    hint: string;
    helperText: string;
    validate: "email" | ((value: string) => boolean);
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;

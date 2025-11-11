interface Props {
    modelValue?: string | number;
    label?: string;
    placeholder?: string;
    type?: "text" | "email" | "password" | "number";
    size?: "sm" | "md" | "lg";
    variant?: "subtle" | "outline" | "plain";
    disabled?: boolean;
    error?: string | null;
    min?: number;
    max?: number;
    step?: number;
    required?: boolean;
    formWrapperWidth?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        left?(_: {}): any;
        right?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    error: string | null;
    type: "text" | "email" | "password" | "number";
    required: boolean;
    disabled: boolean;
    placeholder: string;
    label: string;
    size: "sm" | "md" | "lg";
    modelValue: string | number;
    max: number;
    min: number;
    variant: "subtle" | "outline" | "plain";
    step: number;
    formWrapperWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

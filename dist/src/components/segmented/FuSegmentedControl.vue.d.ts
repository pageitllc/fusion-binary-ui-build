import { Component } from 'vue';
export interface FuSegmentedOption {
    /** Value emitted through `update:modelValue` */
    value: string;
    label: string;
    /** Optional icon component shown before the label */
    icon?: Component;
    disabled?: boolean;
}
type __VLS_Props = {
    /** Selected option value (use with `v-model`) */
    modelValue: string;
    options: FuSegmentedOption[];
    size?: "sm" | "md" | "lg";
    /** Stretches the control to the full width with equal segments */
    block?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    size: "sm" | "md" | "lg";
    block: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;

import { Component } from 'vue';
import { FuPopoverAlign } from '../popover/FuPopover.vue';
export interface CheckboxDropdownOption {
    value: string | number;
    label: string;
    /** A short line under the label */
    description?: string;
    disabled?: boolean;
}
type __VLS_Props = {
    options: CheckboxDropdownOption[];
    /** The values that are on */
    modelValue?: (string | number)[];
    /** The button's text */
    text?: string;
    icon?: Component | null;
    /** Show how many are on, as "View · 3" */
    showCount?: boolean;
    /** A small heading inside the menu */
    title?: string;
    size?: "sm" | "md";
    variant?: "solid" | "subtle" | "outline" | "ghost";
    align?: FuPopoverAlign;
    width?: string;
    maxHeight?: string;
    ariaLabel?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: (string | number)[]) => any) | undefined;
}>, {
    title: string;
    text: string;
    size: "sm" | "md";
    width: string;
    variant: "solid" | "subtle" | "outline" | "ghost";
    align: FuPopoverAlign;
    ariaLabel: string;
    icon: Component | null;
    maxHeight: string;
    modelValue: (string | number)[];
    showCount: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

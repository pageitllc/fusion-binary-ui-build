import { Component } from 'vue';
interface Option {
    label: string;
    color?: string;
    icon?: Component;
}
interface Props {
    modelValue: Option | null;
    options: Option[];
    align?: "left" | "center" | "right";
    label?: string;
    placeholder?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    placeholder: string;
    label: string;
    align: "left" | "center" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdown: HTMLDivElement;
    menuRef: HTMLUListElement;
}, HTMLDivElement>;
export default _default;

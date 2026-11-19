import { Component } from 'vue';
export interface TreePickerNode {
    id: string | number;
    label: string;
    /** Small text on the right (a status, a count). */
    meta?: string;
    /** Colour of the meta text. */
    metaTone?: "default" | "success" | "warning" | "danger";
    /** Small coloured square before the label, any CSS colour. */
    color?: string;
    icon?: Component;
    disabled?: boolean;
    /** How much of a budget is used, 0 to 1 and over. Shows a small ring: green while under, red once over. */
    usage?: number;
    children?: TreePickerNode[];
}
type __VLS_Props = {
    nodes: TreePickerNode[];
    /** Selected id (v-model). */
    modelValue?: string | number | null;
    /** Ids of open branches (v-model:expanded). When omitted the picker manages it. */
    expanded?: (string | number)[];
    /** Start with every branch open. */
    startExpanded?: boolean;
    /** Show a search box. */
    searchable?: boolean;
    searchPlaceholder?: string;
    /** Show "Collapse all / Expand all" under the tree. */
    footer?: boolean;
    /** list: plain rows. panel: bordered card, for use inside a dropdown. */
    variant?: "list" | "panel";
    /** Height of the scrolling area (CSS value). */
    maxHeight?: string;
    indent?: number;
    emptyText?: string;
    /** sm: tighter rows and smaller text, for a dropdown inside a form. */
    size?: "sm" | "md";
    /** What opens a branch: a chevron, or a small circle with + and - (the way Productive draws it). */
    toggle?: "chevron" | "circle";
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        node?(_: {
            node: TreePickerNode;
            selected: boolean;
            level: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (node: TreePickerNode) => any;
    "update:modelValue": (id: string | number) => any;
    "update:expanded": (ids: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((node: TreePickerNode) => any) | undefined;
    "onUpdate:modelValue"?: ((id: string | number) => any) | undefined;
    "onUpdate:expanded"?: ((ids: (string | number)[]) => any) | undefined;
}>, {
    footer: boolean;
    size: "sm" | "md";
    variant: "list" | "panel";
    toggle: "chevron" | "circle";
    startExpanded: boolean;
    indent: number;
    emptyText: string;
    modelValue: string | number | null;
    searchable: boolean;
    searchPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

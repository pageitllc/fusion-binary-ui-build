import { Component } from 'vue';
export interface SelectionBarAction {
    /** Sent back in `action`. */
    key: string;
    label: string;
    icon?: Component;
    /** "primary" is the main action (green), "danger" is destructive (red). */
    tone?: "default" | "primary" | "danger";
    disabled?: boolean;
    loading?: boolean;
}
type __VLS_Props = {
    /** How many things are selected. The bar hides itself at 0. */
    count: number;
    /** Word after the number, for example "selected" or "tasks selected". */
    label?: string;
    actions?: SelectionBarAction[];
    /** Show the x that clears the selection. */
    clearable?: boolean;
    clearLabel?: string;
    /** fixed: pinned to the bottom of the screen. sticky: sticks to the bottom of its scrolling parent. inline: sits where you place it. */
    position?: "fixed" | "sticky" | "inline";
    /** Force it shown or hidden. By default it shows when count is above 0. */
    visible?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    clear: () => any;
    action: (key: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: (() => any) | undefined;
    onAction?: ((key: string) => any) | undefined;
}>, {
    visible: boolean;
    label: string;
    position: "fixed" | "sticky" | "inline";
    actions: SelectionBarAction[];
    clearable: boolean;
    clearLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

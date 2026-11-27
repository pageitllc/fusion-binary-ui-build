import { Component } from 'vue';
export interface DetailItem {
    /** Used for the slot name `value-<key>`. */
    key: string;
    label: string;
    value?: string | number | null;
    icon?: Component;
    href?: string;
    /** Leave this row out (for example money for team members). */
    hidden?: boolean;
    /** Show muted text when there is no value. */
    emptyText?: string;
}
type __VLS_Props = {
    items: DetailItem[];
    title?: string;
    /** stacked: label above value. inline: label left, value right. */
    layout?: "inline" | "stacked";
    divided?: boolean;
    /** A bordered white card. */
    card?: boolean;
    /** Width of the label column in inline layout. */
    labelWidth?: string;
    loading?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`value-${string}`, (_: {
        item: DetailItem;
    }) => any>> & {
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    loading: boolean;
    layout: "inline" | "stacked";
    divided: boolean;
    card: boolean;
    labelWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

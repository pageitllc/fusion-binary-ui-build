export interface FuListRowProps {
    /** Main line. Use the default slot instead for rich text (e.g. a bold name) */
    title?: string;
    /** Supporting line under the title. Use the `subtitle` slot for rich text */
    subtitle?: string;
    /** Draws a divider above every row except the first. Off = no lines at all */
    divided?: boolean;
    /** Renders the row as a link */
    href?: string;
    /** Renders the row as a button and emits `click` */
    clickable?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        leading?(_: {}): any;
        default?(_: {}): any;
        subtitle?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FuListRowProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<FuListRowProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    clickable: boolean;
    divided: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export interface FuCardProps {
    /** Small caps heading shown at the top of the card */
    title?: string;
    /** Draws the 1px Fusion border. Turn off when the card sits inside another bordered surface */
    bordered?: boolean;
    /** Removes the body padding so rows can run edge to edge (dividers inside are the rows' own) */
    flush?: boolean;
    /** Renders the whole card as a link */
    href?: string;
    /** Renders the whole card as a button and emits `click` */
    clickable?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        actions?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FuCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<FuCardProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    clickable: boolean;
    bordered: boolean;
    flush: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

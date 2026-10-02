export interface FusionInfoCardProps {
    /** Main heading — also the source for the auto-derived initial when no `initial` is given */
    title: string;
    /** Supporting text shown under the title */
    description?: string;
    /** Image URL for the visual. When omitted, a colored initial square is shown instead */
    image?: string;
    imageAlt?: string;
    /** Overrides the auto-derived (first letter of `title`) initial shown when there's no `image` */
    initial?: string;
    /** Background color of the initial square */
    color?: string;
    /** Renders as a `<button>` with hover/focus affordance and emits `click` */
    clickable?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FusionInfoCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<FusionInfoCardProps> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    color: string;
    clickable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

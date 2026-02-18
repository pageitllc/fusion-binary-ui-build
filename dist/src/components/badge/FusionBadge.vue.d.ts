interface Props {
    text?: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline" | "ghost";
    /**
     * Theme color class e.g.
     * "fu-badge--success" | "fu-badge--warning" | "fu-badge--published"
     */
    themeClass?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    text: string;
    size: "sm" | "md" | "lg";
    variant: "solid" | "subtle" | "outline" | "ghost";
    themeClass: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

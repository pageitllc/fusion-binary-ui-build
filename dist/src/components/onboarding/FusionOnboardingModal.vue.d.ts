export interface OnboardingModalPanel {
    /** Small label above the panel title, e.g. "SIGNALS" */
    eyebrow?: string;
    title?: string;
    content?: string;
    /** Picture address. Where it sits is set by `imagePosition`. */
    image?: string;
    imageAlt?: string;
    /** Panel background, any CSS colour. Defaults to the theme's soft surface. */
    bg?: string;
    /** Panel text colour. Defaults to the theme's text colour. */
    color?: string;
    /** Colour of the small label. Defaults to the text colour. */
    eyebrowColor?: string;
}
type __VLS_Props = {
    isVisible: boolean;
    /** Heading of the main side. Leave empty to build your own inside the default slot. */
    title?: string;
    description?: string;
    /** The coloured side. Leave out to get a plain, single-column modal. */
    panel?: OnboardingModalPanel | null;
    /** Which side the panel is on */
    panelPosition?: "right" | "left";
    /** Picture above or below the panel's words */
    imagePosition?: "top" | "bottom";
    size?: "md" | "lg";
    /** How the page behind is treated: "focus" (dimmed and blurred, so attention stays on the modal), "glass" (light frosted look) or "plain" (just dark) */
    backdrop?: "focus" | "glass" | "plain";
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
};
declare function __VLS_template(): any;
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    title: string;
    size: "md" | "lg";
    description: string;
    panel: OnboardingModalPanel | null;
    panelPosition: "right" | "left";
    imagePosition: "top" | "bottom";
    backdrop: "focus" | "glass" | "plain";
    closeOnBackdrop: boolean;
    closeOnEscape: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, any, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

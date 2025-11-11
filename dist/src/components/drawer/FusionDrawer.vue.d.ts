export interface FusionDrawerProps {
    open: boolean;
    title?: string;
    position?: "left" | "right" | "bottom";
    size?: "half" | "full";
    showControls?: boolean;
    hideHeaderBorder?: boolean;
    canNext?: boolean;
    canPrev?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {
            class: string;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FusionDrawerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    next: () => any;
    prev: () => any;
}, string, import('vue').PublicProps, Readonly<FusionDrawerProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onNext?: (() => any) | undefined;
    onPrev?: (() => any) | undefined;
}>, {
    size: "half" | "full";
    position: "left" | "right" | "bottom";
    showControls: boolean;
    hideHeaderBorder: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

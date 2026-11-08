type __VLS_Props = {
    modelValue?: string;
    size?: "xs" | "sm" | "md";
    /** Colours already used in the document, shown under the picker ("In this document") */
    swatches?: string[];
    /** A background colour: shows the contrast ratio of the chosen colour against it */
    contrastWith?: string;
    /** Show the screen eyedropper where the browser has one (Chrome, Edge). Default true */
    eyedropper?: boolean;
    /** No circle: the trigger slot is the whole button, so a host (a toolbar, say) draws its own */
    bare?: boolean;
    /** The page keeps its focus and text selection while the picker is used, so a colour can be applied to selected text */
    keepFocus?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLDivElement;
        popoverRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLDivElement;
    popoverRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export type FuPopoverAlign = "left" | "right" | "center";
export type FuPopoverSide = "bottom" | "top";
type __VLS_Props = {
    align?: FuPopoverAlign;
    side?: FuPopoverSide;
    offset?: number;
    width?: string;
    maxHeight?: string;
    stickyHeader?: boolean;
    stickyFooter?: boolean;
};
declare function openPopover(): void;
declare function close(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLDivElement;
        popoverRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    open: typeof openPopover;
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    open: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
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

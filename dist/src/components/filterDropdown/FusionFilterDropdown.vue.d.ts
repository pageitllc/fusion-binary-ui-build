interface Props {
    align?: "left" | "center" | "right";
    isOpen?: boolean;
    payload?: unknown;
    title?: string;
    width?: number | string;
    maxWidth?: number | string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
        content?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        dropdown: HTMLDivElement;
        menuRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    cancel: () => any;
    open: () => any;
    "update:isOpen": (value: boolean) => any;
    apply: (payload: unknown) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:isOpen"?: ((value: boolean) => any) | undefined;
    onApply?: ((payload: unknown) => any) | undefined;
}>, {
    title: string;
    align: "left" | "center" | "right";
    width: number | string;
    isOpen: boolean;
    maxWidth: number | string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdown: HTMLDivElement;
    menuRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

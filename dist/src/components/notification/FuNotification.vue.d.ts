interface Props {
    unreadCount?: number;
    bellIcon?: any;
    align?: "left" | "center" | "right";
    bellClass?: string;
    bellStyle?: "light" | "dark";
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        dropdown: HTMLDivElement;
        panelEl: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    align: "left" | "center" | "right";
    unreadCount: number;
    bellIcon: any;
    bellClass: string;
    bellStyle: "light" | "dark";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdown: HTMLDivElement;
    panelEl: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
